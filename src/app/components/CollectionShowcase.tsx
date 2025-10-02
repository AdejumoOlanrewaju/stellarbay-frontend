import { Button } from '@/components/ui/button'
import { ArrowRight, Package } from 'lucide-react'
import React from 'react'

const CollectionShowcase = () => {
    const collections = [
        {
            title: "Summer Essentials",
            description: "Curated picks for the perfect season",
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop",
            products: "156 Products"
        },
        {
            title: "Tech Innovations",
            description: "Latest gadgets & cutting-edge devices",
            image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&h=600&fit=crop",
            products: "89 Products"
        }
    ];
    return (
        <div className='collection-section w-full'>
            <div className="max-w-[1440px] mx-auto px-4 py-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Trending Collections</h2>
                    <p className="text-gray-600 text-lg">Curated selections for every occasion</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {collections.map((collection, index) => (
                        <div key={index} className="relative overflow-hidden rounded-3xl h-[500px] group cursor-pointer shadow-xl hover:shadow-2xl transition-all">
                            <img
                                src={collection.image}
                                alt={collection.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-all"></div>
                            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                                <div className="flex items-center space-x-2 mb-3">
                                    <Package className="h-5 w-5" strokeWidth={2} />
                                    <p className="text-sm font-semibold tracking-widest opacity-90">{collection.products}</p>
                                </div>
                                <h3 className="text-4xl font-bold mb-3">{collection.title}</h3>
                                <p className="text-lg mb-8 opacity-90 max-w-md">{collection.description}</p>
                                <Button className="self-start bg-white text-black hover:bg-gray-100 font-semibold rounded-full px-8 group-hover:scale-105 transition-all shadow-xl">
                                    Explore Collection
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CollectionShowcase
