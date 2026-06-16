"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, X } from "lucide-react"
import Image from "next/image"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const handlePlay = () => {
    setShowModal(true)
    setIsPlaying(true)
  }

  const handleClose = () => {
    setShowModal(false)
    setIsPlaying(false)
  }

  // YouTube video URL
  const videoId = "vj3kcusqROQ" // SOS video ID
  const thumbnailUrl = "/images/hero/hero-monitoramento.jpg"

  return (
    <section id="central" className="py-12 lg:py-16 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Central de Segurança SOS
          </motion.h2>
        </div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Thumbnail Container */}
          <div 
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={handlePlay}
          >
            {/* Thumbnail Image */}
            <Image
              src={thumbnailUrl}
              alt="Central de Monitoramento SOS"
              fill
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-primary/40"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                
                {/* Pulse Animation */}
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
              </motion.button>
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-white text-xs font-medium">Central 24h</span>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Monitoramento em tempo real</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Operação 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Equipe especializada</span>
            </div>
          </div>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={handleClose}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Video Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  ref={videoRef}
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="Central de Monitoramento SOS"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
