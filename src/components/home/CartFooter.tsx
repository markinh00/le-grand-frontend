"use client"

import { useCartContext } from "@/contexts/CartContext";
import { Button } from "../ui/button";
import CartButton from "./CartIButton";

export default function CartFooter() {
    const { cart } = useCartContext();

    return (
        <div className="w-full flex md:flex-col items-center md:items-start justify-between md:px-2">
            <CartButton />
            <Button
                variant="default"
                className="w-[49%] md:w-full md:mb-2"
                type="submit"
                disabled={cart.products.length <= 0}
            >
                Fazer pedido
            </Button>
        </div>
    )
}