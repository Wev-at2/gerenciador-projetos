<template>
  <main class="flex flex-col items-center justify-center h-screen p-6 bg-v4-dark-gray3 text-white" ref="mainContent">
    <h1 id="login-title" class="text-h1 font-extrabold text-v4-red mb-6 uppercase tracking-wide">Login</h1>
    <form @submit.prevent="login" aria-labelledby="login-title" class="w-full max-w-sm space-y-4">
      <input id="email" v-model="email" type="email" placeholder="E-mail"
        class="w-full px-4 py-2 bg-v4-dark-gray2 text-white border border-v4-dark-gray1 rounded focus:outline-none focus:ring-2 focus:ring-v4-red" required />

      <input id="senha" v-model="senha" type="password" placeholder="Senha"
        class="w-full px-4 py-2 bg-v4-dark-gray2 text-white border border-v4-dark-gray1 rounded focus:outline-none focus:ring-2 focus:ring-v4-red" required />

      <button type="submit"
        class="btn btn-primary w-full py-4 rounded-md bg-red-700 hover:bg-red-800 transition">
        Entrar
      </button>
    </form>
  </main>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const senha = ref('')
const router = useRouter()
const mainContent = ref<HTMLElement | null>(null)

onMounted(() => {
  mainContent.value?.focus()
})

const login = () => {
  console.log('Login iniciado')
  localStorage.setItem('token', 'token-fake-autenticado')
  console.log('Token salvo, redirecionando...')
  router.push('/projetos')
}
</script>
