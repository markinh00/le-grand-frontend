"use client"

import { useCartContext } from "@/contexts/CartContext";
import { formatCurrency } from "@/lib/currency";
import { Product } from "@/types/product";
import { IoClose } from "react-icons/io5";

export default function CartList() {
    const { cart, updateCart } = useCartContext();

    const removeItemFromCart = (product: Product) => {
        updateCart({ ...product, quantity: 0 });
    }

    return (
        cart.products.map(product => {
            return (
                <div className="flex justify-between mb-1" key={product.id}>
                    <div className="flex items-center">
                        <div className="p-1" onClick={() => removeItemFromCart(product)}>
                            <IoClose color="red" />
                        </div>
                        <p className="line-clamp-1 font-medium">{product.name}</p>
                    </div>
                    <div className="flex pl-2">
                        <p className="mr-1">{product.quantity}</p>
                        <p className="mr-1">x</p>
                        <p>{formatCurrency(product.price)}</p>
                    </div>
                </div>
            )
        })
    )
}