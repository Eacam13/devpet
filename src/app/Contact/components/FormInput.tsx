'use client'

import { FaUser, FaEnvelope, FaTag, FaCommentAlt } from 'react-icons/fa'

interface FormInputProps {
  id: string
  label: string
  type?: string
  register: any
  error?: string
  isTextArea?: boolean
}

const getIcon = (id: string) => {
  switch (id) {
    case 'name':
      return <FaUser className="text-green-600" />
    case 'email':
      return <FaEnvelope className="text-green-600" />
    case 'subject':
      return <FaTag className="text-green-600" />
    case 'message':
      return <FaCommentAlt className="text-green-600" />
    default:
      return null
  }
}

const FormInput = ({ id, label, type = 'text', register, error, isTextArea = false }: FormInputProps) => (
  <div className="relative">
    <label 
      htmlFor={id}
      className="block text-sm font-semibold mb-2 text-gray-700"
    >
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {getIcon(id)}
      </div>
      {isTextArea ? (
        <textarea
          {...register(id)}
          id={id}
          rows={4}
          className="w-full pl-10 p-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-gray-900 placeholder-gray-500"
          aria-describedby={`${id}-error`}
          placeholder={`Digite seu ${label.toLowerCase()}`}
        />
      ) : (
        <input
          {...register(id)}
          type={type}
          id={id}
          className="w-full pl-10 p-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-gray-900 placeholder-gray-500"
          aria-describedby={`${id}-error`}
          placeholder={`Digite seu ${label.toLowerCase()}`}
        />
      )}
    </div>
    {error && (
      <p id={`${id}-error`} className="mt-1 text-sm text-red-500 font-medium">
        {error}
      </p>
    )}
  </div>
)

export default FormInput