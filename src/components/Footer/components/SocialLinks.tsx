import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  { Icon: FaFacebook, href: 'https://facebook.com' },
  { Icon: FaInstagram, href: 'https://instagram.com' },
  { Icon: FaWhatsapp, href: 'https://wa.me/5511999999999' }
]

const SocialLinks = () => (
  <div className="flex justify-center space-x-6 mb-8">
    {socialLinks.map(({ Icon, href }, index) => (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label={`Visite nossas redes sociais`}
      >
        <Icon className="w-6 h-6" />
      </a>
    ))}
  </div>
)

export default SocialLinks 