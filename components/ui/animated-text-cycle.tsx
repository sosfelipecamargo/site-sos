"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface AnimatedTextCycleProps {
  words: string[]
  interval?: number
  className?: string
}

export function AnimatedTextCycle({
  words,
  interval = 2500,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Calculate min-width based on longest word to prevent layout shift
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span className={`relative inline-flex justify-center whitespace-nowrap ${className}`}>
      {/* Invisible longest word to reserve space */}
      <span className="invisible" aria-hidden="true">
        {longestWord}
      </span>
      {/* Animated word positioned absolutely over the space */}
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
