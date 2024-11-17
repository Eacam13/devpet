'use client'

import { FaPaperPlane } from 'react-icons/fa'

interface SubmitButtonProps {
  isSubmitting: boolean
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 font-semibold shadow-lg"
    aria-label={isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
  >
    {isSubmitting ? (
      <>
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        <span>Enviando...</span>
      </>
    ) : (
      <>
        <FaPaperPlane className="text-white" />
        <span>Enviar mensagem</span>
      </>
    )}
  </button>
)

export default SubmitButton