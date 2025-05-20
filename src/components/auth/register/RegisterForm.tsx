"use client"

import { useActionState } from "react";
import ValidatedInput from "../../shared/ValidatedInput";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import registerUser from "@/actions/auth/register";
import { Separator } from "../../ui/separator";
import ErrorMessage from "../../shared/ErrorMessage";

export default function RegisterForm() {
    const [data, action, isPending] = useActionState(registerUser, undefined);

    return (
        <form action={action} className="grid gap-4 w-full">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome:</Label>
                <ValidatedInput
                    type="name"
                    id="name"
                    name="name"
                    placeholder="nome..."
                    defaultValue={data?.values?.name}
                    errorMessage={data?.errors?.name ? data?.errors?.name[0] : undefined}
                />
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email:</Label>
                <ValidatedInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email..."
                    defaultValue={data?.values?.email}
                    errorMessage={data?.errors?.email ? data?.errors?.email[0] : undefined}
                />
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">celular:</Label>
                <ValidatedInput
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000..."
                    defaultValue={data?.values?.phone}
                    errorMessage={data?.errors?.phone ? data?.errors?.phone[0] : undefined}
                />
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha:</Label>
                <ValidatedInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder="senha..."
                    defaultValue={data?.values?.password}
                    errorMessage={data?.errors?.password ? data?.errors?.password[0] : undefined}
                />
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirmar Senha:</Label>
                <ValidatedInput
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="confirmar senha..."
                    defaultValue={data?.values?.confirmPassword}
                    errorMessage={data?.errors?.confirmPassword ? data?.errors?.confirmPassword[0] : undefined}
                />
            </div>

            <div className="flex flex-col space-y-1.5">
                <Button variant="default" type="submit" disabled={isPending} >
                    {isPending ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Cadastrar-se"}
                </Button>
                <ErrorMessage>{data?.errors?.internal}</ErrorMessage>
            </div>

            <Separator />

            <div className="flex w-full items-center justify-center text-xs">
                <p className="mr-2">Já tem uma conta?</p>
                <a href="/login" className="text-detail underline">entrar</a>
            </div>
        </form>
    )
}