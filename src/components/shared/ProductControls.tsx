"use client";

import { useCartContext } from "@/contexts/CartContext";
import { Product } from "@/types/product";
import { ChangeEvent, useEffect, useState } from "react";
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
    const {cart,  updateCart } = useCartContext();
    const productInCart = cart.products.find(p => p.id === product.id);
    const [quantity, setQuantity] = useState<number>(productInCart?.quantity ?? 0);

    useEffect(() => {
        console.log("oi");
        updateCart({ ...product, quantity });
    }, [quantity]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);

        if (value > 99) setQuantity(99);
        else if (value < 0) setQuantity(0);
        else setQuantity(value);
    };

    const subtractFromQuantity = (amount: number) => {
        setQuantity(prev => Math.max(0, prev - amount));
    };

    const addToQuantity = (amount: number) => {
        setQuantity(prev => Math.min(99, prev + amount));
    };

    return (
        <div className="flex items-center">
            <ProductControlsButton type="minus" onclick={() => subtractFromQuantity(1)} />
            <input
                id={`product${product.id}`}
                name={`product${product.id}`}
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
