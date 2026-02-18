import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from './components/navigation'
import { Footer } from './components/footer'
import { PageTransitionWrapper } from './components/page-transition-wrapper'

export const metadata: Metadata = {
  title: 'HyggeHaus - Coming Soon',
  description: 'Where Scandinavian hygge meets German techno',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="ambient-light light-1" />
        <div className="ambient-light light-2" />
        <div className="ambient-light light-3" />
        <main className="page-content">
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
      </main>
        <Footer />
      </body>
    </html>
  )
}
