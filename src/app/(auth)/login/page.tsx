"use server"

import LoginForm from "@/components/auth/login/LoginForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Logo from "@/components/shared/Logo";
import AuthCarousel from "@/components/auth/AuthCarousel";

export default async function LoginPage() {
    return (
        <main className="flex flex-col items-center w-full h-full overflow-auto lg:flex-row lg:max-w-4xl lg:max-h-[550px] xl:max-h-[600px] lg:overflow-hidden lg:rounded-xl">
            <div className="relative w-full h-full min-h-56 flex flex-col justify-center items-center text-header-text lg:max-h-[550px] xl:max-h-[600px] overflow-hidden">
                <AuthCarousel className="hidden lg:block" />


                <div className="relative z-1 w-full h-full flex flex-col justify-center items-center">
                    <Logo className="text-6xl mb-4" />
                    <p className="text-center">Pães artesanais e cookies deliciosos</p>
                </div>
            </div>

            <Card className="w-full h-fit rounded-tl-xl rounded-tr-xl rounded-bl-none rounded-br-none lg:max-h-[550px] xl:max-h-[600px] lg:h-full lg:overflow-auto lg:rounded-tl-none z-10">
                <CardHeader>
                    <CardTitle>Entrar</CardTitle>
                </CardHeader>
                <div className="flex justify-center">
                    <CardContent className="max-w-2xl w-full">
                        <LoginForm />
                    </CardContent>
                </div>
            </Card>
        </main>
    )
}