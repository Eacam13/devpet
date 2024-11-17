'use client'

import Link from 'next/link'

const links = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/about' },
  { name: 'Serviços', href: '/services' },
  { name: 'Contato', href: '/Contact' }
]

const QuickLinks = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Links Rápidos</h3>
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.name}>
            <a 
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm hover:text-white transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuickLinks