"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { useCartContext } from "@/contexts/CartContext"
import CartList from "./CartList"
import { Button } from "../ui/button"
import { formatCurrency } from "@/lib/currency"

export default function CartButton() {
    const { cart } = useCartContext();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-[49%] md:hidden">
                    <p className="mr-1 font-medium md:ml-4">Total:</p>
                    <p className="font-medium">{formatCurrency(Math.abs(cart.total))}</p>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Carrinho</DialogTitle>
                </DialogHeader>
                <div className="flex-col justify-between items-center">
                    <CartList />
                </div>
            </DialogContent >
        </Dialog >
    )
}