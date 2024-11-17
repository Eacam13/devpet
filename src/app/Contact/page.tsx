'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '../../schemas/schema'
import FormInput from './components/FormInput'
import SubmitButton from './components/SubmitButton'
import SuccessMessage from './components/SuccessMessage'
import { FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-green-50 via-green-100/50 to-white">
      <div className="max-w-2xl mx-auto p-6 my-1">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaEnvelope className="text-green-600 text-2xl" />
            <h1 className="text-2xl font-bold text-gray-800">Entre em Contato</h1>
          </div>

          <div className="bg-green-50 p-3 rounded-lg mb-6 max-w-sm mx-auto">
            <p className="text-green-800 text-sm text-center">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4">
            <form 
              onSubmit={handleSubmit(handleFormSubmit)}
              className="space-y-4"
            >
              <FormInput
                id="name"
                label="Nome"
                register={register}
                error={errors.name?.message}
              />

              <FormInput
                id="email"
                label="Email"
                type="email"
                register={register}
                error={errors.email?.message}
              />

              <FormInput
                id="subject"
                label="Assunto"
                register={register}
                error={errors.subject?.message}
              />

              <FormInput
                id="message"
                label="Mensagem"
                register={register}
                error={errors.message?.message}
                isTextArea
              />

              <SubmitButton isSubmitting={isSubmitting} />
            </form>

            {submitSuccess && <SuccessMessage />}
          </div>
        </div>
      </div>
    </div>
  )
}
