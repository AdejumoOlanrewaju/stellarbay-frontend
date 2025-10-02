import { Award, Package, TrendingUp } from 'lucide-react';
import React from 'react'

const FeaturedCategory = () => {
    const categories = [
        {
            name: "Electronics",
            count: "2,847 items",
            image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=600&fit=crop",
            icon: TrendingUp
        },
        {
            name: "Fashion",
            count: "5,234 items",
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop",
            icon: Award
        },
        {
            name: "Home & Living",
            count: "3,156 items",
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop",
            icon: Package
        },
        {
            name: "Sports & Outdoor",
            count: "4,092 items",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=600&fit=crop",
            icon: TrendingUp
        }
    ];
    return (
        <div className='featured-category-container w-full'>
            <div className="max-w-[1440px] mx-auto px-4 py-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Shop by Category</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our carefully curated collections designed to match your lifestyle</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 shadow-lg hover:shadow-2xl transition-all">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-all"></div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white">
                                        <IconComponent className="h-10 w-10 mb-3 group-hover:scale-110 transition-transform" strokeWidth={2} />
                                        <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                                        <p className="text-sm text-white/80">{category.count}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default FeaturedCategory
