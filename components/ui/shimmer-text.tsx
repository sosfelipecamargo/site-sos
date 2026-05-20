"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShimmerTextProps {
  children: React.ReactNode
  className?: string
  shimmerColor?: string
  duration?: number
}

export function ShimmerText({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.3)",
  duration = 2.5,
}: ShimmerTextProps) {
  return (
    <motion.span
      className={cn("relative inline-block", className)}
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          currentColor 0%,
          currentColor 40%,
          ${shimmerColor} 50%,
          currentColor 60%,
          currentColor 100%
        )`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      animate={{
        backgroundPosition: ["100% 0%", "-100% 0%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  )
}
