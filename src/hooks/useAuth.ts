import { api, apiFormURLEncoded } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

type LoginInput = {
    email: string
    password: string
}

type LoginResponse = {
    access_token: string
    token_type: string
}

export function useLogin() {
    return useMutation<LoginResponse, unknown, LoginInput>({
        mutationFn: async ({ email, password }: LoginInput) => {
            const formData = new FormData()
            formData.append('username', email)
            formData.append('password', password)

            const response = await apiFormURLEncoded.post('/login', formData)
            const { access_token, token_type } = response.data

            Cookies.set('legrand_token', access_token)

            return { access_token, token_type }
        }
    })
}

type RegisterInput = {
    name: string,
    phone: string,
    email: string,
    password: string,
    confirmPassword: string
}

type RegisterResponse = {
    access_token: string
    token_type: string
}

export function useRegister() {
    return useMutation<RegisterResponse, unknown, RegisterInput>({
        mutationFn: async (userData: RegisterInput) => {
            const response = await api.post('/login', userData)
            const { access_token, token_type } = response.data

            Cookies.set('legrand_token', access_token)

            return { access_token, token_type }
        }
    })
}