import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

const Category = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 120,
            image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Electronics",
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 199,
            image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Wearables",
        },
        {
            id: 3,
            name: "Gaming Laptop",
            price: 1200,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Computers",
        },
        {
            id: 4,
            name: "Bluetooth Speaker",
            price: 60,
            image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D80",
            category: "Electronics",
        },
    ]


    const categoryName = (await params).slug.join("")
    return (
        <div>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h1 className="text-3xl font-bold tracking-tight capitalize">
                            {categoryName}
                        </h1>

                        {/* Sort dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Sort by</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Newest</DropdownMenuItem>
                                <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                                <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                                <DropdownMenuItem>Best Sellers</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Sidebar Filters */}
                    <aside className="hidden md:block">
                        <div className="bg-white shadow rounded-2xl p-5 space-y-6">
                            <h2 className="text-lg font-semibold">Filters</h2>

                            <div>
                                <h3 className="font-medium mb-2">Price</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Under $100
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> $100 - $500
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Above $500
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium mb-2">Brand</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Apple
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Samsung
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Sony
                                    </label>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition py-0 gap-3"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full hover:scale-105 transition"
                                    />
                                </div>
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <p className="text-gray-600">${product.price}</p>
                                    <div className="flex justify-between items-center">
                                        <Badge variant="secondary">{product.category}</Badge>
                                        <Link href={`/product/${product.id}`}>
                                            <Button size="sm">View</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </main>
                </div>
            </div>

        </div>
    )
}

export default Category
