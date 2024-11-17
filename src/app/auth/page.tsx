'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Footer from '@/components/Footer'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  return (
    <>
      <div className={`fixed inset-0 w-full min-h-screen transition-colors duration-500 ${isLogin ? 'bg-gradient-to-br from-white to-green-50' : 'bg-gradient-to-br from-green-600 to-green-700'}`} />
      
      {/* Main container with dynamic padding */}
      <div className="relative min-h-[100dvh] flex items-center justify-center px-4 py-6 sm:py-8 md:py-12">
        <div className="w-full max-w-md relative">
          {/* Decorative circles - adjusted for better mobile display */}
          <div className="absolute -top-4 -left-4 sm:-top-10 sm:-left-10 w-32 h-32 sm:w-40 sm:h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -top-4 -right-4 sm:-top-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-4 left-10 sm:-bottom-10 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          {/* Form container with improved mobile padding */}
          <div className="relative backdrop-blur-sm bg-white/80 rounded-xl sm:rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.1)] overflow-hidden">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <LoginForm key="login" onToggleForm={toggleForm} />
              ) : (
                <RegisterForm key="register" onToggleForm={toggleForm} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}