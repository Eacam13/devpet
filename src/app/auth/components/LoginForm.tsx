'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
})

type LoginFormData = z.infer<typeof loginSchema>

interface LoginFormProps {
  onToggleForm: () => void
}

export default function LoginForm({ onToggleForm }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      // Implement login logic here
      console.log(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      // Implement Google login logic here
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white/90 backdrop-blur-sm p-8 w-full"
    >
      <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Login</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all disabled:opacity-70 shadow-lg shadow-green-600/20"
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
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
        onClick={handleGoogleLogin}
        className="w-full bg-white py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all border border-gray-200 flex items-center justify-center gap-2 shadow-lg shadow-gray-200/20"
      >
        <FaGoogle className="text-red-500" />
        Google
      </button>

      <p className="text-gray-600 text-center mt-8">
        Não tem uma conta?{' '}
        <button
          onClick={onToggleForm}
          className="font-semibold text-green-600 hover:text-green-700 transition-colors focus:outline-none hover:underline"
        >
          Registre-se
        </button>
      </p>
    </motion.div>
  )
}
