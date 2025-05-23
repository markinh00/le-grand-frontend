"use client"

import { IoCartOutline } from "react-icons/io5"
import { IconButton } from "../shared/IconButton"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { useCartContext } from "@/contexts/CartContext"
import CartList from "./CartList"

export default function CartIcon() {
    const { cart } = useCartContext();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <IconButton className='mr-2 md:hidden'>
                    <IoCartOutline color="white" />
                </IconButton>
            </DialogTrigger>
            <DialogContent className="pl-2">
                <DialogHeader className="pl-2">
                    <DialogTitle>Carrinho</DialogTitle>
                </DialogHeader>
                {cart.products.length > 0 ? (
                    <div className="flex-col justify-between items-center">
                        <CartList />
                    </div>
                ) : (
                    <div className="flex justify-center items-center">
                        <p>carrinho vazio</p>
                    </div>
                )}
            </DialogContent >
        </Dialog >
    )
}