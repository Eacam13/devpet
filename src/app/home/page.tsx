'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FaPaw, FaHeart, FaWhatsapp } from 'react-icons/fa'

export default function Home() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá, gostaria de marcar uma visita.')
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='min-h-[100dvh] bg-gradient-to-b from-white to-green-50 py-6 sm:py-8 md:py-12'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-20'>
          <motion.div 
            variants={itemVariants}
            className='flex flex-col items-center md:items-start justify-center w-full md:w-1/2 max-w-lg space-y-4 sm:space-y-5 md:space-y-6'
          >
            <div className='flex items-center gap-2 sm:gap-3 mt-8 sm:mt-12 md:mt-16 mb-2'>
              <motion.div animate={floatingAnimation}>
                <FaPaw className='text-2xl sm:text-3xl text-green-600' />
              </motion.div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
                Dev<span className='text-green-600'>Pet</span>
              </h1>
            </div>
            
            <motion.p 
              variants={itemVariants}
              className='text-lg sm:text-xl md:text-2xl font-medium text-center md:text-left text-gray-700 leading-relaxed'
            >
              Bem-vindo ao lugar perfeito para cuidar do seu melhor amigo!
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className='text-base sm:text-lg text-center md:text-left text-gray-600'
            >
              Oferecemos serviços de qualidade com muito amor e carinho para seu pet.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-2'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className='px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 text-white text-sm sm:text-base rounded-full font-semibold shadow-lg hover:bg-green-700 transition-colors flex items-center gap-2'
              >
                <FaWhatsapp className="text-lg sm:text-xl" />
                Agendar Visita
                <FaHeart className='text-pink-300 text-sm sm:text-base' />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className='px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-green-600 text-green-600 text-sm sm:text-base rounded-full font-semibold hover:bg-green-50 transition-colors'
              >
                Contato
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            className='relative w-full md:w-1/2 mt-6 md:mt-0'
          >
            <motion.div
              animate={floatingAnimation}
              className='relative'
            >
              <Image 
                src='/fotohome.png' 
                alt='Cachorro feliz' 
                width={600} 
                height={400} 
                priority 
                className="object-contain w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto drop-shadow-2xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
                className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-black/10 rounded-full blur-xl'
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
