"use server"

import { cookies } from "next/headers";

export async function setCartCookie(): Promise<void> {
    const cookie = await cookies();
    //cookie.set('legrand_token', access_token);
}


export async function getCartCookie() {
    const cookie = await cookies();
    return cookie.get('cart_cookie')?.value
}

export async function deleteCartCookie(): Promise<void> {
    const cookie = await cookies();
    cookie.delete("cart_cookie");
}