import type { Metadata } from 'next'
import { Manrope, Merriweather } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Orca Middle East | General Contracting & Transport Solutions',
  description: 'Leading contracting, transportation, and heavy equipment rental company serving the Middle East. Government, private developers, and O&G sector solutions.',
  keywords: ['contracting', 'transportation', 'equipment rental', 'Middle East', 'UAE', 'Saudi Arabia', 'construction', 'logistics'],
  generator: 'shah',
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: 'Orca Middle East | General Contracting & Transport',
    description: 'Professional contracting and transport solutions across the Middle East.',
    url: 'https://orca-me.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'Orca Middle East',
  },
  alternates: {
    canonical: 'https://orca-me.com',
  },
  icons: {
    icon: [
      {
        url: '/images.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${manrope.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
