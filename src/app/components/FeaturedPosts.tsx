import React from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, ShoppingCart, Star } from 'lucide-react';
import AddToCartBtn from './AddToCartBtn';
const FeaturedPosts = () => {
    const featuredProducts = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 349,
            oldPrice: 499,
            rating: 4.9,
            reviews: 2847,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
            badge: "Limited Edition"
        },
        {
            id: 2,
            name: "Smart Watch Ultra",
            price: 599,
            oldPrice: 799,
            rating: 4.8,
            reviews: 1923,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
            badge: "Bestseller"
        },
        {
            id: 3,
            name: "Designer Leather Bag",
            price: 289,
            oldPrice: 399,
            rating: 4.9,
            reviews: 1456,
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop",
            badge: "New Arrival"
        },
        {
            id: 4,
            name: "Professional Camera",
            price: 899,
            oldPrice: 1199,
            rating: 5.0,
            reviews: 3201,
            image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop",
            badge: "Pro Choice"
        },
        {
            id: 5,
            name: "Minimalist Desk Lamp",
            price: 129,
            oldPrice: 189,
            rating: 4.7,
            reviews: 892,
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop",
            badge: "Trending"
        },
        {
            id: 6,
            name: "Wireless Keyboard",
            price: 159,
            oldPrice: 229,
            rating: 4.8,
            reviews: 1567,
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop",
            badge: "Popular"
        },
        {
            id: 7,
            name: "Premium Sunglasses",
            price: 199,
            oldPrice: 299,
            rating: 4.9,
            reviews: 2103,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
            badge: "Hot Deal"
        },
        {
            id: 8,
            name: "Portable Speaker",
            price: 249,
            oldPrice: 349,
            rating: 4.8,
            reviews: 1789,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
            badge: "Featured"
        }
    ];

    return (
        <div className='featured-prd-section w-full'>
            <div className="bg-gradient-to-b from-gray-50 to-white py-20">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Featured Products</h2>
                            <p className="text-gray-600 text-lg">Handpicked items just for you</p>
                        </div>
                        <Button variant="outline" className="hidden md:flex border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all rounded-full font-semibold px-6">
                            View All Products
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-white py-0">
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden aspect-square">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                                        <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                            {product.badge}
                                        </span>
                                        <Button
                                            size="icon"
                                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all bg-white hover:bg-gray-100 text-black rounded-full shadow-lg hover:scale-110"
                                        >
                                            <Heart className="h-4 w-4" strokeWidth={2} />
                                        </Button>
                                        <AddToCartBtn product={product}/>
                                    </div>
                                    <div className="p-5 pb-8">
                                        <h3 className="font-semibold text-gray-900 mb-2 text-base group-hover:text-blue-600 transition-colors line-clamp-1">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center mb-3">
                                            <div className="flex items-center mr-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" strokeWidth={0} />
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-600 font-medium">{product.rating}</span>
                                            <span className="text-xs text-gray-400 ml-1">({product.reviews.toLocaleString()})</span>
                                        </div>
                                        <div className="flex items-baseline space-x-2">
                                            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                                            <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
                                            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                                -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturedPosts
