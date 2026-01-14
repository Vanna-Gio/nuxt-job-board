<template>
    <section >
        <h1>Dashboard</h1>
        <p v-if="useAuthStore.user">
            Logged in as {{ useAuthStore.user.email }} 
        </p>
        <button @click="logout">Logout</button>
    </section>
</template>
<script setup >
    const authStore = useAuthStore()
    const router = useRouter()

    const logout =() => {
        authStore.logout()
        router.push('/login')
    }
</script>