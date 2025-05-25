"use client"

import { useCartContext } from "@/contexts/CartContext";
import { formatCurrency } from "@/lib/currency";
import { Product } from "@/types/product";
import { IoClose } from "react-icons/io5";

type Props = React.ComponentProps<"div">

export default function CartList({ className }: Props) {
    const { cart, updateCart } = useCartContext();

    const removeItemFromCart = (product: Product) => {
        updateCart({ ...product, quantity: 0 });
    }

    return (
        <div className={`flex flex-col w-full h-full md:px-2 md:pb-4 ${className ?? ""}`}>
            {cart.products.length > 0 ? (
                <>
                    <div className="overflow-y-auto">
                        {cart.products.map(product => {
                            return (
                                <div className="flex justify-between items-center mb-1" key={product.id}>
                                    <div className="flex items-center">
                            
                                        <p className="line-clamp-1 font-medium">{product.name}</p>
                                    </div>
                                    <div className="flex pl-2">
                                        <p className="mr-1">{product.quantity}</p>
                                        <p className="mr-1">x</p>
                                        <p>{formatCurrency(product.price)}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex items-center w-full justify-between">
                        <p className="mr-1 font-medium">Total:</p>
                        <p className="font-medium">{formatCurrency(Math.abs(cart.total))}</p>
                    </div>
                </>
            ) : (
                <div className="w-full h-full flex justify-center items-center">
                    <p className="text-primary/50">Carrinho Vazio</p>
                </div>
            )}
        </div>
    )
}