'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-12 h-12 brutal-border bg-white" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-12 h-12 flex items-center justify-center brutal-border brutal-shadow transition-colors bg-brutal-bg text-brutal-fg hover:bg-brutal-yellow rounded-none"
      aria-label="Toggle Theme"
    >
      {isDark ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  )
}
