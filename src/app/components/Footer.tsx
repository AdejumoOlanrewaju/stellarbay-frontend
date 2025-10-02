import { Package, Shield } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200" >
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <div className="flex items-center mb-6 group cursor-pointer">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg blur-sm opacity-40"></div>
                                    <Package className="h-8 w-8 text-black relative" strokeWidth={2.5} />
                                </div>
                                <span className="ml-3 text-xl font-bold tracking-tight text-black">StellarBay</span>
                            </div>
                            <p className="text-gray-600 mb-8 leading-relaxed max-w-sm">Elevating your shopping experience with premium products, exceptional service, and unbeatable value. Your satisfaction is our priority.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                                    <span className="text-white text-sm font-bold">tw</span>
                                </a>
                                <a href="#" className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                                    <span className="text-white text-sm font-bold">yt</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 text-sm tracking-wider">SHOP</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">New Arrivals</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Best Sellers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Sale & Offers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Gift Cards</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">All Categories</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 text-sm tracking-wider">SUPPORT</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Contact Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">FAQs</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Shipping Info</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Returns & Refunds</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Track Order</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 text-sm tracking-wider">COMPANY</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">About Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Careers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-600 text-sm">&copy; 2024 LUMINA. All rights reserved. Crafted with excellence.</p>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <Shield className="h-5 w-5 text-green-600" strokeWidth={2} />
                                    <span className="text-sm font-semibold text-gray-700">Secure Checkout</span>
                                </div>
                                <div className="flex items-center space-x-3 pl-6 border-l border-gray-300">
                                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                                        <span className="text-xs font-bold text-gray-600">VISA</span>
                                    </div>
                                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                                        <span className="text-xs font-bold text-gray-600">MC</span>
                                    </div>
                                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                                        <span className="text-xs font-bold text-gray-600">AMEX</span>
                                    </div>
                                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                                        <span className="text-xs font-bold text-gray-600">PP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
