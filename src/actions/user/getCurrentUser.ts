import { UserRead } from './../../types/user';
import { api } from "@/lib/api";
import { cookies } from 'next/headers';


export default async function getCurrentUser(): Promise<UserRead | undefined> {
    const token = (await cookies()).get("legrand_token");

    if (!token) return

    const response = await api.get("auth/me/")
    const user: UserRead = response.data
    return user
}