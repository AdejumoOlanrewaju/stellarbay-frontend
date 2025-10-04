"use client"

import { error } from "console"
import React, { createContext, useContext, useState } from "react"

export type Product = {
    id: number,
    name: string,
    price: number,
    image: string
}

type CartItem = Product & { quantity: number }

type CardContextType = {
    cart: CartItem[],
    addToCart: (product: Product) => void,
    removeFromCart: (id: number) => void,
    updateQuantity : (id: number, quantity: number) => void,
    cartCount: number
}

const CartContext = createContext<CardContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if (existing) {
                return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }

            return [...prev, { ...product, quantity: 1 }];
        })
    }

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

    const updateQuantity = (id: number, quantity: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        )
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartCount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be within a CartProvider")
    return context
}