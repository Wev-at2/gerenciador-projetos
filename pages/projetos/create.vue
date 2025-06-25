<template >
  <div class="max-w-xl mx-auto p-6 bg-stone-950 text-white rounded shadow-md">
    <h1 class="text-h2 font-bold text-v4-red mb-6 uppercase tracking-wide">Novo Projeto</h1>

    <Form :validation-schema="schema" @submit="onSubmit" class="space-y-4">
      <div v-for="campo in ['nome', 'descricao', 'preco', 'tipo', 'categoria']" :key="campo">
        <label class="block font-semibold capitalize">{{ campo }}</label>
        <Field :name="campo"
          :type="campo === 'preco' ? 'number' : 'text'"
          class="w-full px-4 py-2 bg-v4-dark-gray3 text-white border border-gray-600 rounded placeholder-gray-400" />
        <ErrorMessage :name="campo" class="text-red-500 text-sm" />
      </div>

      <button type="submit"
        class="btn btn-primary w-full py-4 rounded-md bg-red-700 hover:bg-red-800 transition ease-linear">
        💾 Salvar Projeto
      </button>
    </Form>
    <NuxtLink to="/projetos" class="btn btn-outline mt-6 block w-full text-center">⬅️ Voltar</NuxtLink>
  </div>
</template>


<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

import { useRuntimeConfig } from 'nuxt/app'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useProjetosStore } from '../../stores/projetos'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()
const projetosStore = useProjetosStore()

const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  descricao: yup.string().required('Descrição obrigatória'),
  preco: yup.number().required('Preço obrigatório').positive(),
  tipo: yup.string().required('Tipo obrigatório'),
  categoria: yup.string().required('Categoria obrigatória')
})

const onSubmit = async (valores: any) => {
  try {
    const projetoFormatado = {
      ...valores,
      preco: Number(valores.preco)
    }

    const config = useRuntimeConfig()

    await $fetch(`${config.public.apiBase}/projetos`, {
      method: 'POST',
      body: projetoFormatado
    })

    router.push('/projetos')
  } catch (err) {
    alert('Erro ao criar projeto!')
  }
}

const mainContent = ref<HTMLElement | null>(null)
onMounted(() => {
  mainContent.value?.focus()
})

</script>
