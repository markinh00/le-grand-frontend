"use server"

import { api, apiFormURLEncoded } from "@/lib/api"
import { setToken } from "@/lib/token"
import { redirect } from "next/navigation";
import { z } from "zod";

type registerUserResponse = undefined | {
    errors: {
        name?: string[] | undefined
        email?: string[] | undefined
        phone?: string[] | undefined
        password?: string[] | undefined
        confirmPassword?: string[] | undefined
        internal?: string[] | undefined
    }
    values: {
        name: string
        email: string
        phone: string
        password: string
        confirmPassword: string
    }
}

const loginSchema = z.object({
    name: z.string()
        .nonempty({ message: "'nome' é um campo obrigatório" }),
    phone: z.string()
        .nonempty({ message: "'celular' é um campo obrigatório" })
        .regex(/^\d+$/, "o telefone deve conter apenas números"),
    email: z.string()
        .nonempty({ message: "'email' é um campo obrigatório" })
        .email("email inválido"),
    password: z.string()
        .nonempty({ message: "'senha' é um campo obrigatório" })
        .min(6, "a senha precisa ter no mínimo 6 caracteres")
        .regex(/^\S*$/, "a senha não pode conter espaços"),
    confirmPassword: z.string()
        .nonempty({ message: "'confirma senha' é um campo obrigatório" })
})
    .refine(data => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "as senhas não coincidem",
    });


export default async function registerUser(prevState: unknown, formData: FormData): Promise<registerUserResponse> {
    const data = {
        name: formData.get("name")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        phone: formData.get("phone")?.toString() ?? "",
        password: formData.get("password")?.toString() ?? "",
        confirmPassword: formData.get("confirmPassword")?.toString() ?? "",
    };

    console.log("loginUser | data:", data)

    const result = loginSchema.safeParse(data);

    if (!result.success) {
        const formattedErrors = result.error.flatten().fieldErrors;
        return { errors: formattedErrors, values: data };
    }

    try {
        const response = await api.post('/auth/register', data);

        if (response.status === 409) {
            return { errors: { email: ["Email já cadastrado"] }, values: data }
        }

        const { access_token, token_type } = response.data;

        await setToken(access_token);
    } catch (error) {
        return { errors: { internal: ["error ao entrar, por favor tente mais tarde"] }, values: data }
    }
    redirect("/");
}
