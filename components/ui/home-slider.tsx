"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
const slides = [
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=400",
    title: "Pay with Verve",
    description: "Enjoy seamless payments with your Verve card across all merchants",
    logo: "https://myverveworld.com/_astro/Verve-logo.DYN3Hzd0_1WQgir.svg",
  },
  {
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&h=400",
    title: "Set up Autopay",
    description: "Never miss a bill payment with our automated payment system",
    logo: "https://interswitchgroup.com/assets/images/home/interswitch_logo.svg",
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&h=400",
    title: "Scan & Pay",
    description: "Quick and secure payments with our QR code technology",
    logo: "https://interswitchgroup.com/assets/images/home/interswitch_logo.svg",
  },
]

export default function HomeSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="relative w-full min-h-[150px] overflow-hidden mb-6 rounded-[10px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 rounded-lg"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/80 to-transparent flex flex-col justify-center px-8 rounded-lg">
            <div className="mb-3">
              {slides[current].logo && (
                <Image
                  src={slides[current].logo}
                  alt="Brand Logo"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              )}
            </div>
            <h2 className="text-white text-2xl font-bold mb-2">{slides[current].title}</h2>
            <p className="text-white/90 max-w-md">{slides[current].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm text-white"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm text-white"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
