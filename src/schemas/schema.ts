import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'Assunto deve ter no mínimo 3 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres')
})

export type ContactFormData = z.infer<typeof contactSchema> 