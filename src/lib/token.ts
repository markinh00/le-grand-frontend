"use server"

import { cookies } from "next/headers";

export async function setToken(access_token: string): Promise<void> {
    const cookie = await cookies();
    cookie.set('legrand_token', access_token);
}


export async function getToken(): Promise<string | undefined> {
    const cookie = await cookies();
    return cookie.get('legrand_token')?.value
}

export async function deleteToken(): Promise<void> {
    const cookie = await cookies();
    cookie.delete("legrand_token");
}