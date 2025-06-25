<template>
  <div class="max-w-xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4 text-white">✏️ Editar Projeto</h1>

    <Form v-if="projeto" :initial-values="projeto" :validation-schema="schema" class="space-y-4" @submit="onSubmit">

      <div>
        <label class="block font-medium text-white">Nome</label>
        <Field name="nome" class="input input-bordered w-full" />
        <ErrorMessage name="nome" class="text-red-500 text-sm" />
      </div>

      <div>
        <label class="block font-medium text-white">Descrição</label>
        <Field name="descricao" class="input input-bordered w-full" />
        <ErrorMessage name="descricao" class="text-red-500 text-sm" />
      </div>

      <div>
        <label class="block font-medium text-white">Preço</label>
        <Field name="preco" type="number" class="input input-bordered w-full" />
        <ErrorMessage name="preco" class="text-red-500 text-sm" />
      </div>

      <div>
        <label class="block font-medium text-white">Tipo</label>
        <Field name="tipo" class="input input-bordered w-full" />
        <ErrorMessage name="tipo" class="text-red-500 text-sm" />
      </div>

      <div>
        <label class="block font-medium text-white">Categoria</label>
        <Field name="categoria" class="input input-bordered w-full" />
        <ErrorMessage name="categoria" class="text-red-500 text-sm" />
      </div>

      <button type="submit" class="btn btn-primary w-full py-4 rounded-md bg-red-700 hover:bg-red-800 transition">💾 Salvar Alterações</button>
    </Form>

    <NuxtLink to="/projetos" class="btn btn-outline mt-6 block w-full text-center">⬅️ Voltar</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig, useFetch  } from 'nuxt/app'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'


definePageMeta({
  middleware: 'auth'
})

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

const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  descricao: yup.string().required('Descrição é obrigatória'),
  preco: yup.number().required('Preço obrigatório').positive(),
  tipo: yup.string().required('Tipo é obrigatório'),
  categoria: yup.string().required('Categoria é obrigatória')
})

onMounted(async () => {
  try {
    const { data, error } = await useFetch<Projeto>(
      `${useRuntimeConfig().public.apiBase}/projetos/${route.params.id}`
    )
    if (error.value) throw new Error('Erro ao carregar projeto')
    projeto.value = data.value as Projeto
  } catch (err: any) {
    alert(err.message)
    router.push('/projetos')
  }
})

const onSubmit = async (valores: any) => {
  try {
    const payload = {
      ...valores,
      id: Number(route.params.id)
    }

    await $fetch(`${useRuntimeConfig().public.apiBase}/projetos/${route.params.id}`, {
      method: 'PUT',
      body: payload
    })

    router.push('/projetos')
  } catch (err) {
    alert('Erro ao salvar alterações!')
    console.error(err)
  }
}





</script>
