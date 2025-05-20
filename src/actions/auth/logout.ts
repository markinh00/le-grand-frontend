"use server"

import { deleteToken } from "@/lib/token";
import { redirect } from "next/navigation";

export default async function logout() {
    await deleteToken();
    redirect("/");
}