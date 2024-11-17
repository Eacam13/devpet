'use client'

import Home from './home/page'
import { themeDefault } from '@/themes/themeDefault'

export default function Page() {
  return (
    <main className="min-h-screen pt-16">
      <section className="relative h-screen bg-fixed bg-center bg-cover bg-gradient-to-b from-white to-green-50">
        <div className="absolute inset-0" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <Home />
        </div>
      </section>
    </main>
  )
}
