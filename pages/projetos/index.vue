<template>
  <main ref="mainContent" class="min-h-screen bg-stone-950 text-white p-6 py-12 space-y-6" tabindex="-1">
    <h1 class="text-h1 font-extrabold text-v4-red">Projetos</h1>

    <NuxtLink
to="/projetos/create"
      class="inline-block px-4 py-2 bg-v4-red text-white rounded font-semibold uppercase hover:bg-v4-red-dark transition">
      ➕ Novo Projeto
    </NuxtLink>

    <form class="grid md:grid-cols-4 gap-4">
      <input
v-model="projetosStore.busca" placeholder="Buscar por nome..."
        class="bg-v4-dark-gray2 text-white px-4 py-2 border border-gray-600 rounded placeholder-gray-400" >

      <input
v-model="projetosStore.tipo" placeholder="Filtrar por tipo..."
        class="bg-v4-dark-gray2 text-white px-4 py-2 border border-gray-600 rounded placeholder-gray-400" >

      <input
v-model="projetosStore.categoria" placeholder="Filtrar por categoria..."
        class="bg-v4-dark-gray2 text-white px-4 py-2 border border-gray-600 rounded placeholder-gray-400" >

      <button
type="button" class="py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition ease-linear"
        @click="aplicarFiltros">
        🔎 Aplicar Filtros
      </button>
    </form>

    <div v-if="projetosStore.loading" class="text-v4-light-gray1">🔄 Carregando projetos...</div>
    <div v-else-if="projetosStore.erro" class="text-red-400">⚠️ {{ projetosStore.erro }}</div>

    <ul class="grid md:grid-cols-4 gap-4">
      <li
v-for="projeto in projetosStore.lista" :key="projeto.id"
        class="p-4 my-4 bg-v4-dark-gray2 border border-v4-dark-gray1 box-border rounded shadow-md flex flex-col justify-between items-start gap-10 rounded-xl ">
        <div>
          <NuxtLink
:to="`/projetos/${projeto.id}`"
            class="text-lg font-bold text-v4-red hover:underline">
            {{ projeto.nome }}
          </NuxtLink>
          <p class="text-sm text-gray-400">{{ projeto.descricao }}</p>
        </div>
        <div class="space-x-2">
          <NuxtLink
:to="`/projetos/${projeto.id}/edit`"
            class="px-3 py-1.5 border border-gray-600 text-white rounded hover:bg-gray-700 transition">✏️ Editar</NuxtLink>
          <button
class="px-3 py-1 bg-red-700 text-white rounded hover:bg-red-800 transition"
            @click="excluirProjeto(projeto.id)">🗑️ Excluir</button>
        </div>
      </li>
    </ul>

    <nav v-if="projetosStore.totalPaginas > 1" class="flex justify-center gap-4 mt-6">
      <button
:disabled="projetosStore.paginaAtual === 1" class="btn-disabled:opacity-50 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600"
        @click="alterarPagina(projetosStore.paginaAtual - 1)">⬅️ Anterior</button>

      <span>Página {{ projetosStore.paginaAtual }} de {{ projetosStore.totalPaginas }}</span>

      <button
:disabled="projetosStore.paginaAtual === projetosStore.totalPaginas"
        class="btn-disabled:opacity-50 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600"
        @click="alterarPagina(projetosStore.paginaAtual + 1)">➡️ Próxima</button>
    </nav>
  </main>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProjetosStore } from '../../stores/projetos'
definePageMeta({
  middleware: 'auth'
})


const projetosStore = useProjetosStore()
const mainContent = ref<HTMLElement | null>(null)

onMounted(() => {
  mainContent.value?.focus()
  projetosStore.carregarProjetos()
})

const aplicarFiltros = () => {
  projetosStore.paginaAtual = 1
  projetosStore.carregarProjetos()
}

const alterarPagina = (pagina: number) => {
  projetosStore.paginaAtual = pagina
  projetosStore.carregarProjetos()
}

const excluirProjeto = async (id: number) => {
  const confirmar = confirm('Tem certeza que deseja excluir este projeto?')
  if (!confirmar) return
  await projetosStore.excluirProjeto(id)
}

</script>
