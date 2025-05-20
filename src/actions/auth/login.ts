"use server"

import { apiFormURLEncoded } from "@/lib/api"
import { setToken } from "@/lib/token"
import { redirect } from "next/navigation";
import { z } from "zod"

type loginUserResponse = undefined | {
    errors: {
        email?: string[] | undefined
        password?: string[] | undefined
        internal?: string[] | undefined
    }
    values: {
        email: string
        password: string
    }
}

const loginSchema = z.object({
    email: z.string()
        .nonempty({ message: "'email' é um campo obrigatório" })
        .email("email inválido"),
    password: z.string()
        .nonempty({ message: "'senha' é um campo obrigatório" })
        .min(6, "a senha precisa ter no mínimo 6 caracteres")
        .regex(/^\S*$/, "a senha não pode conter espaços")
});

export default async function loginUser(prevState: unknown, formData: FormData): Promise<loginUserResponse> {

    const data = {
        email: formData.get("email")?.toString() ?? "",
        password: formData.get("password")?.toString() ?? "",
    };

    console.log("loginUser | data:", data)

    const result = loginSchema.safeParse(data);

    if (!result.success) {
        const formattedErrors = result.error.flatten().fieldErrors;
        return { errors: formattedErrors, values: data };
    }

    try {
        const params = new URLSearchParams();
        params.append("username", data.email);
        params.append("password", data.password);

        const response = await apiFormURLEncoded.post('/auth/login', params);

        if (response.status === 401) {
            return { errors: { email: ["Email ou senha incorretos"] }, values: data }
        }

        const { access_token, token_type } = response.data;

        await setToken(access_token);
    } catch (error) {
        return { errors: { internal: ["error ao entrar, por favor tente mais tarde"] }, values: data }
    }
    redirect("/");
}
