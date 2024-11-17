'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='min-h-[100dvh] bg-gradient-to-br from-white via-green-50/50 to-white'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 pt-24 sm:pt-28'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20'>
          {/* Conteúdo de texto */}
          <motion.div 
            variants={itemVariants}
            className='flex flex-col items-start justify-center gap-6 sm:gap-8 md:gap-10 w-full md:w-1/2'
          >
            <div className='w-full space-y-3 sm:space-y-4'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>
                Sobre Nós
              </h1>
              <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed'>
                Bem-vindo ao DevPet! Somos apaixonados por pets e nos dedicamos a oferecer serviços 
                de qualidade para garantir o bem-estar, a felicidade e a saúde dos seus companheiros 
                de estimação. Nosso objetivo é criar uma experiência única e de confiança, onde você 
                encontra tudo o que seu pet precisa em um só lugar, com carinho e profissionalismo.
              </p>
            </div>

            <div className='w-full space-y-3 sm:space-y-4'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>
                Nossa Missão
              </h2>
              <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed'>
                Nossa missão é oferecer serviços especializados e personalizados, focados no conforto 
                e na segurança dos pets e na tranquilidade dos tutores. Sabemos que cada animal é único 
                e merece atenção especial; por isso, nossa equipe é altamente treinada para atender às 
                necessidades específicas de cada pet.
              </p>
            </div>

            <div className='w-full space-y-3 sm:space-y-4'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>
                Nossos Valores
              </h2>
              <ul className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed space-y-2'>
                <li>• Amor e respeito pelos animais</li>
                <li>• Excelência no atendimento</li>
                <li>• Compromisso com o bem-estar animal</li>
                <li>• Profissionalismo e ética</li>
              </ul>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div 
            variants={itemVariants}
            className='w-full md:w-1/2 flex justify-center items-start md:sticky md:top-24'
          >
            <div className='relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]'>
              <Image 
                src='/img01.png' 
                alt='DevPet - Cuidando do seu melhor amigo' 
                width={500} 
                height={500}
                className='rounded-xl w-full h-auto object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm'
                priority
              />
              <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-black/10 rounded-full blur-xl' />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
