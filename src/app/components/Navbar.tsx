"use client"
import React, { useEffect, useState } from 'react'
import { ShoppingCart, Search, Menu, Star, Package, Shield, ArrowRight, Heart, ChevronLeft, ChevronRight, User, Clock, TrendingUp, Award, Truck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            {/* Navigation */}
            <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-12">
                            <div className="flex items-center group cursor-pointer">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg blur-sm opacity-40"></div>
                                    <Package className="h-8 w-8 text-black relative" strokeWidth={2.5} />
                                </div>
                                <span className="ml-3 text-xl font-bold tracking-tight text-black">StellarBay</span>
                            </div>
                            <div className="hidden lg:flex space-x-8">
                                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors tracking-wide">NEW IN</a>
                                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors tracking-wide">COLLECTIONS</a>
                                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors tracking-wide">CATEGORIES</a>
                                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors tracking-wide">SALE</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="hidden md:flex items-center bg-gray-50 rounded-full px-5 py-2.5 w-72 border border-gray-200 focus-within:border-gray-300 transition-all">
                                <Search className="h-4 w-4 text-gray-400" strokeWidth={2} />
                                <input
                                    type="text"
                                    placeholder="Search luxury items..."
                                    className="bg-transparent border-none outline-none ml-3 w-full text-sm placeholder:text-gray-400"
                                />
                            </div>
                            <Button variant="ghost" size="icon" className="hover:bg-gray-50">
                                <User className="h-5 w-5 text-gray-900" strokeWidth={2} />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:bg-gray-50">
                                <Heart className="h-5 w-5 text-gray-900" strokeWidth={2} />
                            </Button>
                            <Button variant="ghost" size="icon" className="relative hover:bg-gray-50">
                                <ShoppingCart className="h-5 w-5 text-gray-900" strokeWidth={2} />
                                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">3</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-5 w-5 text-gray-900" />
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
