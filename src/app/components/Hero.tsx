"use client"
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroSlides = [
        {
            title: "Elevate Your Style",
            subtitle: "Discover Premium Fashion & Lifestyle",
            cta: "Shop Collection",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
        },
        {
            title: "Tech That Inspires",
            subtitle: "Innovation Meets Design",
            cta: "Explore Gadgets",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop"
        },
        {
            title: "Home Essentials",
            subtitle: "Curated Comfort & Elegance",
            cta: "Browse Home",
            image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1920&h=1080&fit=crop"
        }
    ];
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };
    return (
        <div className='w-full hero-container'>
            {/* Hero Carousel */}
            <div className="relative h-[650px] bg-black overflow-hidden">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                                <div className="max-w-2xl">
                                    <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                                        <Award className="h-4 w-4 text-white" />
                                        <span className="text-xs font-semibold tracking-widest text-white">PREMIUM COLLECTION</span>
                                    </div>
                                    <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
                                        {slide.subtitle}
                                    </p>
                                    <div className="flex space-x-4">
                                        <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-base rounded-full shadow-xl hover:shadow-2xl transition-all">
                                            {slide.cta}
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                        <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-6 text-base rounded-full backdrop-blur-sm bg-white/10 transition-all">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={prevSlide}
                    className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all border border-white/20 hover:scale-110"
                >
                    <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all border border-white/20 hover:scale-110"
                >
                    <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
                </button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1.5 rounded-full transition-all ${index === currentSlide ? 'bg-white w-12' : 'bg-white/40 w-8 hover:bg-white/60'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero
