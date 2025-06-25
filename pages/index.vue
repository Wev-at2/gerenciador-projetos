<script setup lang="ts">
const router = useRouter()

onMounted(() => {
  const token = localStorage.getItem('token')
  router.push(token ? '/projetos' : '/login')
})
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-background text-white">
    <p class="text-xl animate-pulse">Redirecionando...</p>
  </div>
</template>
