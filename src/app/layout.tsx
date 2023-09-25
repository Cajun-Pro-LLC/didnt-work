import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://didntwork.dev'),
  title: "Didn’t Work",
  description: 'Oh? This is why',
  openGraph: {
    title: "Didn’t Work.",
    description: "Oh? This is why",
    url: "https://didntwork.dev",
    siteName: '"Didn’t Work"',
    images: {
      url: "/icon.png",
      width: 210,
      height: 210,
      alt: "icon",
    },
    locale: "en-US",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
