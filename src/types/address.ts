export type AddressRead = {
    id: number
    street: string
    number: number
    complement?: string
    neighborhood: string
    city: string
    state: string
    zip_code: string

    customer_id: number
}

export type AddressInOrder = {
    street: string
    number: number
    complement?: string
    neighborhood: string
    city: string
    state: string
    zip_code: string
}