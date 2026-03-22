"use client"

import Link from "next/link"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

// Paper shader background component
function PaperShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    let animationId: number
    let time = 0
    
    const render = () => {
      time += 0.005
      
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      
      // Dark gradient base
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#0a0a0a')
      gradient.addColorStop(0.5, '#111111')
      gradient.addColorStop(1, '#0a0a0a')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
      
      // Add subtle noise texture
      const imageData = ctx.getImageData(0, 0, width * 2, height * 2)
      const data = imageData.data
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 15
        data[i] = Math.max(0, Math.min(255, data[i] + noise))
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise))
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise))
      }
      
      ctx.putImageData(imageData, 0, 0)
      
      // Add subtle flowing lines
      ctx.strokeStyle = 'rgba(227, 6, 19, 0.03)'
      ctx.lineWidth = 1
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        const yOffset = (i * height / 4) + Math.sin(time + i) * 20
        ctx.moveTo(0, yOffset)
        
        for (let x = 0; x < width; x += 10) {
          const y = yOffset + Math.sin((x * 0.01) + time + i) * 30
          ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
      
      animationId = requestAnimationFrame(render)
    }
    
    render()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(0.5px)' }}
    />
  )
}

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Paper shader background */}
      <PaperShaderBackground />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(227,6,19,0.08)_0%,_transparent_70%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Vamos desenhar a solução ideal para a sua operação?
          </h2>
          <p className="mt-6 text-lg text-white/70 text-pretty">
            Fale com a equipe da SOS e entenda como unir segurança, tecnologia 
            e eficiência em um projeto sob medida para sua empresa, residência 
            ou condomínio.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base"
            >
              <Link href="/contato">
                Solicitar proposta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-base bg-transparent"
            >
              <a 
                href="https://wa.me/5519994828201?text=Olá! Gostaria de saber mais sobre as soluções da SOS." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com consultor
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
