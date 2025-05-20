"use client"

import { useActionState } from "react"
import { Button } from "../../ui/button"
import { Label } from "../../ui/label"
import loginUser from "@/actions/auth/login"
import ValidatedInput from "../../shared/ValidatedInput"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { Separator } from "../../ui/separator"
import ErrorMessage from "../../shared/ErrorMessage"

export default function LoginForm() {
    const [data, action, isPending] = useActionState(loginUser, undefined);

    return (
        <form action={action} className="grid gap-4 w-full">
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
                <Button variant="default" type="submit" disabled={isPending} >
                    {isPending ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Entrar"}
                </Button>
                <ErrorMessage>{data?.errors?.internal}</ErrorMessage>
            </div>

            <Separator />

            <div className="flex w-full items-center justify-center text-xs">
                <p className="mr-2">Aind não tem uma conta?</p>
                <a href="/register" className="text-detail underline">cadastrer-se</a>
            </div>
        </form>
    )
}