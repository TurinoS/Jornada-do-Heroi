import ContextAPIProvider from '@/context/ContextAPI'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Hero's Journey`,
  description: 'Developed by Paulo Turino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ContextAPIProvider>
        <body className={inter.className}>{children}</body>
      </ContextAPIProvider>
    </html>
  )
}
