import { useFetch, useRuntimeConfig } from 'nuxt/app'
import { defineStore } from 'pinia'

export interface Projeto {
  id: number
  nome: string
  descricao: string
  preco: number
  tipo: string
  categoria: string
}

export const useProjetosStore = defineStore('projetos', {
  state: () => ({
    lista: [] as Projeto[],
    loading: false,
    erro: null as string | null,

    // Novos estados
    busca: '',
    tipo: '',
    categoria: '',
    paginaAtual: 1,
    totalPaginas: 1,
    porPagina: 5
  }),

  actions: {
    async carregarProjetos() {
      this.loading = true
      this.erro = null

      try {
        const params = new URLSearchParams()
        if (this.busca.trim() !== '') params.append('q', this.busca.trim())
        if (this.tipo.trim() !== '') params.append('tipo', this.tipo.trim())
        if (this.categoria.trim() !== '') params.append('categoria', this.categoria.trim())


        params.append('_page', String(this.paginaAtual))
        params.append('_limit', String(this.porPagina))

        console.log('URL final:', `/projetos?${params.toString()}`)

        let total = 0
        console.log('🔎 Response completa:', {
          busca: this.busca,
          tipo: this.tipo,
          categoria: this.categoria,
          params: params.toString()
        })

        const config = useRuntimeConfig()
        const { data, error } = await useFetch(
          `${config.public.apiBase}/projetos?${params.toString()}`,
          {
            onResponse({ response }: { response: Response }) {
              total = Number(response.headers.get('X-Total-Count') || '0')
            }
          }
        )
        const projetos = data.value as Projeto[]

        console.log('Projetos recebidos:', data.value)

        if (error.value) throw new Error('Erro ao carregar projetos')

        this.lista = Array.isArray(data.value) ? data.value as Projeto[] : []
        this.totalPaginas = Math.ceil(total / this.porPagina)
      } catch (err: any) {
        this.erro = err.message
      } finally {
        this.loading = false
      }
    },
    async excluirProjeto(id: number) {
      try {
        const config = useRuntimeConfig()
        await $fetch(`${config.public.apiBase}/projetos/${id}`, {
          method: 'DELETE'
        })
        this.lista = this.lista.filter(p => p.id !== id)
      } catch (err: any) {
        this.erro = 'Erro ao excluir projeto.'
      }
    }

  }
})
