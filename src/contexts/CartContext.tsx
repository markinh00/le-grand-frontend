"use client"

import { Product } from '@/types/product';
import React, { createContext, useContext, useState } from 'react';

type Cart = {
    products: Product[]
    total: number
}

const emptyCart: Cart = {
    products: [],
    total: 0,
}

const defaultValue = {
    cart: emptyCart,
    updateCart: () => { }
};

const CartContext = createContext<{
    cart: Cart
    updateCart: (product: Product) => void
}>(defaultValue);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Cart>(emptyCart);

    const updateCart = (product: Product) => {
        const foundProduct = cart.products.find(p => p.id === product.id);

        if (!foundProduct && product.quantity <= 0) {
            return;
        }

        else if (!foundProduct && product.quantity > 0) {
            setCart({
                ...cart,
                products: [...cart.products, product],
                total: cart.total + product.price * product.quantity,
            });
        }

        else if (foundProduct && product.quantity <= 0) {
            const updatedProducts = cart.products.filter(p => p.id !== product.id);
            setCart({
                ...cart,
                products: updatedProducts,
                total: cart.total - foundProduct.price * foundProduct.quantity,
            });
        }

        else if (foundProduct && product.quantity > 0) {
            const updatedProducts = cart.products.map(p =>
                p.id === product.id ? { ...p, quantity: product.quantity } : p
            );

            const oldTotal = foundProduct.price * foundProduct.quantity;
            const newTotal = product.price * product.quantity;

            setCart({
                ...cart,
                products: updatedProducts,
                total: cart.total - oldTotal + newTotal,
            });
        }
    }

    return (
        <CartContext.Provider value={{ cart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
    return useContext(CartContext);
}

