"use server"

import { api } from "@/lib/api"
import { Product } from "@/types/product";

export default async function getAllProducts(): Promise<Product[]> {
    try {
        const response = await api.get("/product/?size=100");
        const products: Product[] = response.data
        products.forEach(products => products.quantity = 0)
        return products
    } catch (error) {
        return []
    }
}