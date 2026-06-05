'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Generates points on a sphere surface
function fibonacciSphere(samples: number, radius: number) {
  const points: { x: number; y: number; z: number }[] = []
  const phi = Math.PI * (Math.sqrt(5) - 1) // golden angle

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2
    const radiusAtY = Math.sqrt(1 - y * y)
    const theta = phi * i

    points.push({
      x: Math.cos(theta) * radiusAtY * radius,
      y: y * radius,
      z: Math.sin(theta) * radiusAtY * radius,
    })
  }
  return points
}

// Project 3D point to 2D
function project(point: { x: number; y: number; z: number }, rotY: number, rotX: number) {
  // Rotate Y
  const cosY = Math.cos(rotY)
  const sinY = Math.sin(rotY)
  let x = point.x * cosY - point.z * sinY
  let z = point.x * sinY + point.z * cosY

  // Rotate X
  const cosX = Math.cos(rotX)
  const sinX = Math.sin(rotX)
  const y = point.y * cosX - z * sinX
  z = point.y * sinX + z * cosX

  const perspective = 600
  const scale = perspective / (perspective + z + 300)

  return {
    x: x * scale + 300,
    y: y * scale + 300,
    scale,
    z,
  }
}

function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const points = useRef(fibonacciSphere(200, 240))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // High DPI
    const dpr = window.devicePixelRatio || 1
    canvas.width = 600 * dpr
    canvas.height = 600 * dpr
    ctx.scale(dpr, dpr)

    let rotation = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX.current = ((e.clientX - rect.left) / rect.width - 0.5) * 0.3
      mouseY.current = ((e.clientY - rect.top) / rect.height - 0.5) * 0.3
    }

    window.addEventListener('mousemove', handleMouseMove)

    const draw = () => {
      rotation += 0.003
      ctx.clearRect(0, 0, 600, 600)

      const projected = points.current
        .map((p, i) => ({
          ...project(p, rotation + mouseX.current, 0.4 + mouseY.current),
          index: i,
        }))
        .sort((a, b) => a.z - b.z)

      // Draw connections between nearby points
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.06)'
      ctx.lineWidth = 0.5
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x
          const dy = projected[i].y - projected[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 60) {
            const alpha = Math.max(0, (1 - dist / 60)) * 0.15 * projected[i].scale
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(projected[i].x, projected[i].y)
            ctx.lineTo(projected[j].x, projected[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw points
      for (const p of projected) {
        const alpha = Math.max(0.1, Math.min(1, (p.z + 300) / 600))
        const size = Math.max(0.5, p.scale * 3)

        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 4)
        gradient.addColorStop(0, `rgba(168, 85, 247, ${alpha * 0.5})`)
        gradient.addColorStop(1, 'rgba(168, 85, 247, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, size * 4, 0, Math.PI * 2)
        ctx.fill()

        // Dot
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-[600px] h-[600px]"
      style={{ width: 600, height: 600 }}
    />
  )
}

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow ring */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#7C3AED]/10 blur-[60px]"
      />

      {/* Rotating outer border rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-[#A855F7]/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[560px] h-[560px] rounded-full border border-dotted border-[#7C3AED]/10"
      />

      {/* Orbiting particles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[520px] h-[520px]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#A855F7] shadow-[0_0_20px_8px_rgba(168,85,247,0.6)]" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[480px] h-[480px]"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]" />
      </motion.div>

      {/* The Globe */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlobeCanvas />
      </motion.div>
    </div>
  )
}
