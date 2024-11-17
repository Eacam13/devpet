'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerSchema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"]
})

type RegisterFormData = z.infer<typeof registerSchema>

interface RegisterFormProps {
  onToggleForm: () => void
}

export default function RegisterForm({ onToggleForm }: RegisterFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)
    try {
      // Implement register logic here
      console.log(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleRegister = async () => {
    try {
      // Implement Google register logic here
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white/90 backdrop-blur-sm p-8 w-full"
    >
      <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Registro</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-green-600" />
            <input
              {...register('name')}
              type="text"
              placeholder="Nome completo"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            />
          </div>
          {errors.name && (
            <span className="text-red-500 text-sm mt-1 block">{errors.name.message}</span>
          )}
        </div>

        <div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-green-600" />
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>
          )}
        </div>

        <div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-green-600" />
            <input
              {...register('password')}
              type="password"
              placeholder="Senha"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm mt-1 block">{errors.password.message}</span>
          )}
        </div>

        <div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-green-600" />
            <input
              {...register('confirmPassword')}
              type="password"
              placeholder="Confirmar senha"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            />
          </div>
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm mt-1 block">{errors.confirmPassword.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all disabled:opacity-70 shadow-lg shadow-green-600/20"
        >
          {isLoading ? 'Registrando...' : 'Registrar'}
        </button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white/90 text-gray-500">Ou continue com</span>
        </div>
      </div>

      <button
        onClick={handleGoogleRegister}
        className="w-full bg-white py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all border border-gray-200 flex items-center justify-center gap-2 shadow-lg shadow-gray-200/20"
      >
        <FaGoogle className="text-red-500" />
        Google
      </button>

      <p className="text-gray-600 text-center mt-8">
        Já tem uma conta?{' '}
        <button
          onClick={onToggleForm}
          className="font-semibold text-green-600 hover:text-green-700 transition-colors focus:outline-none hover:underline"
        >
          Faça login
        </button>
      </p>
    </motion.div>
  )
}
