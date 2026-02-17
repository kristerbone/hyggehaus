import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HyggeHaus - Coming Soon',
  description: 'Where Scandinavian hygge meets house & techno',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
