import AboutColumn from './components/AboutColumn'
import QuickLinks from './components/QuickLinks'
import ContactInfo from './components/ContactInfo'
import BusinessHours from './components/BusinessHours'
import SocialLinks from './components/SocialLinks'
import Copyright from './components/Copyright'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <AboutColumn />
          <QuickLinks />
          <ContactInfo />
          <BusinessHours />
        </div>
        <SocialLinks />
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer