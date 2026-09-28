import { SmoothScrollProvider } from '@/hooks/SmoothScrollProvider'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Concept } from '@/components/Concept'
import { Features } from '@/components/Features'
import { Screenshots } from '@/components/Screenshots'
import { CtaBand } from '@/components/Footer'

export default function App() {
  return (
    <SmoothScrollProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Concept />
          <Features />
          <Screenshots />
          <CtaBand />
        </main>
      </div>
    </SmoothScrollProvider>
  )
}
