import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
  color?: string
  vx?: number
  vy?: number
}

export function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      opacity: number
    }[] = []

    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 + vx,
        vy: (Math.random() - 0.5) * 2 + vy,
        opacity: Math.random(),
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx / staticity
        particle.y += particle.vy / staticity

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = -particle.vx
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy = -particle.vy
        }

        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = color
        ctx.fillRect(particle.x, particle.y, 2, 2)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [quantity, staticity, ease, refresh, color, vx, vy])

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none", className)}
    />
  )
}

