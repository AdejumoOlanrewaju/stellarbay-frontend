import { Clock, Shield, Truck } from 'lucide-react';
import React from 'react'

const TrustCategory = () => {

    return (
        <div className='tr-category-container w-full'>
            <div className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white">
                <div className=" mx-auto px-7 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-5 group">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                                <Truck className="h-7 w-7 text-white" strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-base mb-1">Free Delivery</h3>
                                <p className="text-sm text-gray-600">For orders over $100 worldwide</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-5 group">
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                                <Shield className="h-7 w-7 text-white" strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-base mb-1">Secure Payment</h3>
                                <p className="text-sm text-gray-600">SSL encryption & secure checkout</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-5 group">
                            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                                <Clock className="h-7 w-7 text-white" strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-base mb-1">30-Day Returns</h3>
                                <p className="text-sm text-gray-600">Hassle-free money back guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustCategory
