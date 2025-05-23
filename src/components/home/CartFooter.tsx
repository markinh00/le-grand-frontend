"use client"

import { useCartContext } from "@/contexts/CartContext";
import { formatCurrency } from "@/lib/currency";
import { Button } from "../ui/button";
import { IoCartSharp } from "react-icons/io5";

export default function CartFooter() {
    const { cart } = useCartContext();

    return (
        <div className="h-full w-full flex md:flex-col items-center md:items-start justify-between md:px-2">
            <div className="w-1/2 flex justify-center items-center md:w-full md:justify-between relative">
                <p className="mr-1 font-medium md:ml-4">Total:</p>
                <p className="font-medium">{formatCurrency(Math.abs(cart.total))}</p>
            </div>
            <Button
                variant="default"
                className="w-1/2 md:w-full md:mb-2"
                type="submit"
                disabled={cart.products.length <= 0}
            >
                Fazer pedido
            </Button>
        </div>
    )
}