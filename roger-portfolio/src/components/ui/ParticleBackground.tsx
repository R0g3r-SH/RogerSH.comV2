import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      hue: number
    }> = []

    const PARTICLE_COUNT = 90
    const MAX_DISTANCE = 120

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        hue: Math.random() * 60 + 220, // blue-purple range
      })
    }

    const drawGradientBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#0b0b0f')
      gradient.addColorStop(1, '#12122a')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const animate = () => {
      drawGradientBackground()

      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 5
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 75%, 0.9)`)
        gradient.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < MAX_DISTANCE) {
            const opacity = 1 - distance / MAX_DISTANCE
            ctx.beginPath()
            ctx.strokeStyle = `hsla(${(particle.hue + other.hue) / 2}, 100%, 70%, ${opacity * 0.2})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}

export default ParticleBackground
