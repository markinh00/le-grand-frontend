"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import LoginForm from "../auth/login/LoginForm";

export default function Authtabs() {
    const [tabsDefaultValue, setTabsDefaultValue] = useState<"login" | "register">("login");

    return (
        <Dialog>
            <div>
                <DialogTrigger asChild>
                    <Button variant="default" onClick={() => setTabsDefaultValue("register")} className="mr-2">cadastrar</Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                    <Button variant="secondary" onClick={() => setTabsDefaultValue("login")}>entrar</Button>
                </DialogTrigger>
            </div>
            <DialogContent>
                <Tabs defaultValue={tabsDefaultValue}>
                    <TabsList className="w-full">
                        <TabsTrigger value="login" >entrar</TabsTrigger>
                        <TabsTrigger value="register" >cadastrar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <DialogHeader className="my-2">
                            <DialogTitle>Entrar</DialogTitle>
                        </DialogHeader>
                        <LoginForm />
                    </TabsContent>
                    <TabsContent value="register">
                        <DialogHeader>
                            <DialogTitle>Cadastrar</DialogTitle>
                        </DialogHeader>
                        <p>register form</p>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    )
}