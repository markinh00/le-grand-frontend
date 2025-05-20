import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios'
import { redirect } from 'next/navigation'
import { deleteToken, getToken } from './token';

export const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.API_KEY,
    }
})

export const apiFormURLEncoded = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-API-Key': process.env.API_KEY,
    },
});

const attachToken = async (request: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const token = await getToken();

    if (token && request.headers) {
        request.headers.Authorization = `Bearer ${token}`
    }

    return request
}

const authErrorMessages = [
    "Could not validate credentials",
    "Not enough permissions"
]

const isAuthErrorMessage = (errorMessage: string) => {
    return authErrorMessages.find(err => err === errorMessage)
}

const handleResponseError = async (error: AxiosError) => {
    if (error.response?.status === 401 && isAuthErrorMessage(error.message)) {
        await deleteToken();
        redirect("/");
    }
    return error
}

api.interceptors.request.use(attachToken)
api.interceptors.response.use(res => res, handleResponseError)

apiFormURLEncoded.interceptors.request.use(attachToken)
apiFormURLEncoded.interceptors.response.use(res => res, handleResponseError)
