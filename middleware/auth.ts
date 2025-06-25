import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app"

export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return

  const token = localStorage.getItem('token')
  console.log('Middleware auth, rota:', to.path, 'Token:', token)

  if (to.path === '/login' && token) {
    console.log('Usuário logado tentando acessar login, redirecionando para /projetos')
    return navigateTo('/projetos')
  }

  if (!token && to.path !== '/login') {
    console.log('Usuário não autenticado, redirecionando para /login')
    return navigateTo('/login')
  }
})