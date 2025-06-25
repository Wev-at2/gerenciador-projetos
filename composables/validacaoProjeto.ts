import * as yup from 'yup'

export const schemaProjeto = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  descricao: yup.string().required('Descrição é obrigatória'),
  preco: yup.number().required('Preço é obrigatório').positive('Preço deve ser positivo'),
  tipo: yup.string().required('Tipo é obrigatório'),
  categoria: yup.string().required('Categoria é obrigatória'),
})
