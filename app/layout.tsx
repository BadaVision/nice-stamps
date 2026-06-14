import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Nice Stamps | Premium Bar Branding",
  description: "Personalizowane stemple do lodu, płyty barmańskie oraz ekskluzywne podkładki. Zbuduj bezkompromisowy wizerunek swojej marki w oczach gości.",
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="IY7RQYPMHFO7XH2Ma42hV7GjNk9Pf5Nef7NBGH3XZ9k" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
