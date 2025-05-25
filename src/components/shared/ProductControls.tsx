"use client";

import { useCartContext } from "@/contexts/CartContext";
import { Product } from "@/types/product";
import { ChangeEvent } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type ProductControlsButtonProps = {
    type: "minus" | "plus";
    onclick: () => void;
};

const ProductControlsButton = ({ type, onclick }: ProductControlsButtonProps) => {
    return (
        <div
            className="flex justify-center items-center rounded-4xl w-7 h-7 bg-detail hover:cursor-pointer hover:bg-detail/70 select-none"
            onClick={onclick}
        >
            {type === "minus" && <FaMinus color="white" size={16} />}
            {type === "plus" && <FaPlus color="white" size={16} />}
        </div>
    );
};

type Props = {
    product: Product;
};

export default function ProductControls({ product }: Props) {
    const { cart, updateCart } = useCartContext();
    const productInCart = cart.products.find(p => p.id === product.id);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);

        if (value > 99) updateCart({ ...product, quantity: 99 });
        else if (value < 0) updateCart({ ...product, quantity: 0 });
        else updateCart({ ...product, quantity: value });
    };

    const subtractFromQuantity = (amount: number) => {
        if (!productInCart) return
        updateCart({ ...product, quantity: Math.max(0, productInCart.quantity - amount) });
    };

    const addToQuantity = (amount: number) => {
        if (!productInCart) {
            updateCart({ ...product, quantity: amount })
            return
        }
        updateCart({ ...product, quantity: Math.min(99, productInCart.quantity + amount) })
    };

    return (
        <div className="flex items-center">
            <ProductControlsButton type="minus" onclick={() => subtractFromQuantity(1)} />
            <input
                type="number"
                max={99}
                min={0}
                value={productInCart?.quantity ?? 0}
                onChange={handleChange}
                className="w-10 p-0.5 border-2 rounded-[5px] text-center border-primary/20 mx-1"
            />
            <ProductControlsButton type="plus" onclick={() => addToQuantity(1)} />
        </div>
    );
}
