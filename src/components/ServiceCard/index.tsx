import Image from 'next/image'
import React from 'react'
import Button from '../Button'

interface ServiceCardProps {
  title: string
  imagePath: string
  altText: string
}

const ServiceCard = ({ title, imagePath, altText }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 hover:scale-105 transition-all duration-300 rounded-lg bg-white shadow-lg w-64">
      <div className="w-full h-40 relative">
        <Image 
          src={imagePath} 
          alt={altText} 
          fill
          className="rounded-lg  border-2 border-gray-300"
        />
      </div>
      <h3 className="text-xl font-semibold text-center mt-4">{title}</h3>
      <Button title="Acessar" styleCard='w-[80%]'/>
    </div>
  )
}

export default ServiceCard 