// test/projetosForm.spec.ts
import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Create from '../pages/projetos/create.vue'
import { describe, it, expect } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { createRouter, createMemoryHistory } from 'vue-router'

describe('Formulário de Projeto', () => {
  it('mostra erros se campos obrigatórios não forem preenchidos', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [],
    })

    const { getByText } = render(Create, {
      global: {
        plugins: [
          createTestingPinia({ stubActions: false }),
          router,
        ],
      },
    })

    await fireEvent.click(getByText('Salvar Projeto'))

    expect(getByText('Nome é obrigatório')).toBeInTheDocument()
    expect(getByText('Descrição obrigatória')).toBeInTheDocument()
    expect(getByText('Preço obrigatório')).toBeInTheDocument()
    expect(getByText('Tipo obrigatório')).toBeInTheDocument()
    expect(getByText('Categoria obrigatória')).toBeInTheDocument()
  })
})
