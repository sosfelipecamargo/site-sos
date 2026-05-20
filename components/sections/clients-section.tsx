"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { 
    name: "Metroval", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-05-IBHCwCUEAeIl1k0xssZAnIBhmLIX9I.png" 
  },
  { 
    name: "Prefeitura de Nova Odessa", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-07-qgBtaJ1Wkipz2EPB2TiiFF1qmuoX1W.png" 
  },
  { 
    name: "Narciso", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-04-G8PRNndatNbQ5S1zQsoFrQrSwH497x.png" 
  },
  { 
    name: "Unimed", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-Qezgfm2svHM2Mh5iXtURbPoeO3PXtY.png" 
  },
  { 
    name: "Arena Atacado", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-12-ApPK8i6ZFLyAILKYmylbtzqohsirm5.png" 
  },
  { 
    name: "Goodyear", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-09-EsSoZUZtrFKnfjB3JqNtZd4Gg90vWL.png" 
  },
  { 
    name: "Nexans", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-03-FeFgXOmLZcQ7Acmp2zfwWV2nriFQS7.png" 
  },
  { 
    name: "Prefeitura de Americana", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-02-w9MJ5JIcvQpWAIjCqLIwwFzeRS60Us.png" 
  },
  { 
    name: "Hanier", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-08-4slFJ1llED4vUryVwAhZgjvKKXG4NO.png" 
  },
  { 
    name: "DAE Americana", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-10-PWvfs3BHggWgIDOy61XtG5j51sgoN4.png" 
  },
  { 
    name: "Sicoob", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-01-ELYMmofJNA77J8oUxTr6PF9w9PcZHD.png" 
  },
  { 
    name: "Contatto", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-11-mVe0cHIgsfq2ypfJ3mU78aePkpGrhR.png" 
  },
  { 
    name: "São Vicente", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preto%20e%20branco%20-%20Forte-06-x9jrhr4mwql6ENz42M5hdSNqADjq3W.png" 
  },
]

// Duplicate for seamless loop
const duplicatedClients = [...clients, ...clients]

export function ClientsSection() {
  return (
    <section className="py-16 lg:py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Clientes
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Quem confia na SOS
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Track */}
        <div className="flex animate-marquee-clients">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <div className="group flex items-center justify-center px-4 py-2 h-20 w-36">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-14 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee-clients {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-clients {
          animation: marquee-clients 40s linear infinite;
        }
        .animate-marquee-clients:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
