const ContactInfo = () => (
  <div>
    <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
    <address className="not-italic">
      <p className="text-sm mb-2">Rua Example, 123</p>
      <p className="text-sm mb-2">São Paulo, SP</p>
      <p className="text-sm mb-2">CEP: 00000-000</p>
      <p className="text-sm mb-2">
        <a 
          href="tel:+551199999999" 
          className="hover:text-white transition-colors"
        >
          (11) 9999-9999
        </a>
      </p>
      <p className="text-sm">
        <a 
          href="mailto:contato@devpet.com"
          className="hover:text-white transition-colors"
        >
          contato@devpet.com
        </a>
      </p>
    </address>
  </div>
)

export default ContactInfo 