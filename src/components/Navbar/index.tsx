'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileMenu from './components/MobileMenu'

const links = [
  { href: '/', label: 'Início' },
  { href: '/about', label: 'Sobre' },
  { href: '/services', label: 'Serviços' },
  { href: '/Contact', label: 'Contato' }
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="fixed w-full bg-white shadow-md z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logopet.png"
              alt="DevPet Logo"
              width={300}
              height={100}
              className="w-auto h-[50px] sm:h-20"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Botão Criar Conta */}
            <Link
              href="/auth"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/auth'
                  ? 'bg-teal-900 text-white'
                  : 'bg-teal-400 text-white hover:bg-teal-900'
              }`}
            >
              Criar Conta
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu links={[...links, { href: '/auth', label: 'Criar Conta' }]} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
