"use client"

import { useCart } from "../contexts/CartContext"
import { Button } from "@/components/ui/button"
import { X, Minus, Plus, ShoppingCart } from "lucide-react"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <ShoppingCart className="h-16 w-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">Browse products and add them to your cart.</p>
      </div>
    )
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border-b border-gray-200 pb-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg border"
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-500 text-sm">${item.price}</p>

                {/* Quantity controls */}
                <div className="flex items-center mt-3 space-x-3">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-3">{item.quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-lg font-bold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-red-500 hover:text-red-600 mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border rounded-xl py-10 px-6 shadow-md bg-white h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">Free</span>
          </div>

          <div className="flex justify-between text-lg font-bold border-t pt-4">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}
