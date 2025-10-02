import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp } from 'lucide-react'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter-section w-full mt-10'>
       <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <TrendingUp className="h-4 w-4 text-white" />
            <span className="text-xs font-semibold tracking-widest text-white">EXCLUSIVE OFFERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Join Our Community</h2>
          <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">Subscribe to get exclusive deals, early access to new collections, and special member perks</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full outline-none bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:bg-white/15 transition-all backdrop-blur-sm"
            />
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-6 cursor-pointer rounded-full shadow-xl hover:shadow-2xl transition-all">
              Subscribe Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="text-gray-500 text-xs mt-6">By subscribing, you agree to our Privacy Policy and Terms of Service</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
