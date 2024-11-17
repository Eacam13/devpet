import React from 'react'
import ServiceCard from '@/components/ServiceCard'
import { themeDefault } from '@/themes/themeDefault'
import { services } from '@/data/dataService'

export default function Services() {
  return (
    <div className="min-h-screen py-20 px-10"
      style={{ backgroundColor: themeDefault.colors.light_gray }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-16 text-center">
          Nossos Serviços
        </h1>
        
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imagePath={service.imagePath}
              altText={service.altText}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
