"use client"
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useCart, Product } from '../contexts/CartContext'
import { useAuth } from '../hooks/useAuth'
import { useRouter } from 'next/navigation'

const AddToCartBtn = ({ product }: { product: Product }) => {
    const { isAuthenticated, user, logout } = useAuth()
    const { addToCart } = useCart()
    const router = useRouter()
    const handleCart = (product: Product) => {
        if(isAuthenticated){
            addToCart(product)
        }else{
            router.push("/login")
        }
    }
    return (
        <div className='absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0'>
            <Button onClick={() => handleCart(product)} className="w-full bg-white text-black hover:bg-gray-100 font-semibold rounded-full shadow-xl">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
            </Button>
        </div>
    )
}

export default AddToCartBtn
