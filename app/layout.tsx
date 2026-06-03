import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'João Pedro Biguelini | Desenvolvedor de Software',
  description: 'Desenvolvedor de software focado em aplicações web, arquitetura de sistemas e soluções digitais. Experiência em PHP, Laravel, React e TypeScript.',
  keywords: 'desenvolvedor, software, web, react, typescript, laravel, php, arquitetura',
  authors: [{ name: 'João Pedro Biguelini' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://joaobiguelini.dev',
    title: 'João Pedro Biguelini | Desenvolvedor de Software',
    description: 'Desenvolvedor de software focado em aplicações web, arquitetura de sistemas e soluções digitais.',
    images: [
      {
        url: 'https://joaobiguelini.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'João Pedro Biguelini',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7C3AED" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%237C3AED' font-weight='bold'>B</text></svg>" />
      </head>
      <body className="bg-dark-bg text-gray-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
