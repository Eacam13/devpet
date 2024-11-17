import React from 'react'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string
    styleCard?: string
}

export default function Button({ title, styleCard = '', ...rest }: ButtonProps) {
  return (
    <button 
      className={`bg-lime text-white p-2 rounded-md ${styleCard}`} 
      {...rest}
    >
      {title}
    </button>
  )
}
