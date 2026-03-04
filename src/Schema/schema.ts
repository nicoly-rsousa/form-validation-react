import { z } from 'zod'
export type FormData = z.infer<typeof formSchema>

export const formSchema = z.object({
  cpf: z
    .string()
    .length(11, 'CPF deve ter 11 dígitos'),

  nomeCompleto: z
    .string()
    .min(1, 'Nome completo é obrigatório'),

  cep: z
    .string()
    .min(1, 'CEP é obrigatório'),

  rua: z
    .string()
    .min(1, 'Rua é obrigatória'),

  numero: z
    .string()
    .min(1, 'Número é obrigatório'),

  complemento: z
    .string()
    .min(1, 'Número é obrigatório'),

  bairro: z
    .string()
    .min(1, 'Bairro é obrigatório'),

  cidade: z
    .string()
    .min(1, 'Cidade é obrigatória'),

  estado: z
    .string()
    .min(1, 'Estado é obrigatório'),
})