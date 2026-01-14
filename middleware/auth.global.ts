export default defineNuxtRouteMiddleware((to) =>{
    const auth = useAuthStore()

    if (to.path.startsWith('/dashboard') && !auth.user) {
        return navigateTo('/login')
    }
})