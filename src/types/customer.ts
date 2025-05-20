import { AddressRead } from "./address"

export type CustomerRead = {
    id: number
    name: string
    phone: string
    email: string
    addresses: AddressRead[]
}

export type CustomerInOrder = {
    id?: number
    name: string
    phone: string
    email?: string
}