import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Biguelini Dev | Soluções Digitais',
  description: 'Desenvolvimento de sistemas, websites, landing pages e aplicações web modernas.',
  keywords: 'desenvolvedor, software, web, react, typescript, laravel, php, arquitetura',
  authors: [{ name: 'Biguelini Dev' }],
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} font-sans scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23000000' font-weight='bold'>B</text></svg>" />
      </head>
      <body className="antialiased selection:bg-brutal-yellow selection:text-black transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
