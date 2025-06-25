<template>
  <div class="max-w-2xl mx-auto p-6 bg-v4-dark-gray2 text-white rounded shadow-lg">
    <h1 class="text-h2 font-bold text-v4-red mb-4">{{ projeto?.nome }}</h1>

    <div v-if="projeto" class="space-y-3">
      <p><strong>📝 Descrição:</strong> {{ projeto.descricao }}</p>
      <p><strong>💰 Preço:</strong> R$ {{ projeto.preco.toFixed(2) }}</p>
      <p><strong>🛠️ Tipo:</strong> {{ projeto.tipo }}</p>
      <p><strong>🏷️ Categoria:</strong> {{ projeto.categoria }}</p>
    </div>

    <div v-else class="text-gray-400">🔄 Carregando detalhes do projeto...</div>

    <NuxtLink to="/projetos"
      class="mt-6 inline-block w-full text-center py-2 border border-gray-600 text-white rounded hover:bg-gray-700 transition">
      ⬅️ Voltar para lista
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
import { useFetch, useRuntimeConfig } from 'nuxt/app'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'


interface Projeto {
  id: number
  nome: string
  descricao: string
  preco: number
  tipo: string
  categoria: string
}

const route = useRoute()
const router = useRouter()
const projeto = ref<Projeto | null>(null)

onMounted(async () => {
  try {
    const { data, error } = await useFetch<Projeto>(
      `${useRuntimeConfig().public.apiBase}/projetos/${route.params.id}`
    )
    if (error.value) throw new Error('Projeto não encontrado.')
    projeto.value = data.value as Projeto
  } catch (err) {
    alert('Erro ao carregar projeto.')
    router.push('/projetos')
  }
})

</script>
