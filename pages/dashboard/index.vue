<template>
    <section >
        <h1>Dashboard</h1>
        <p v-if="useAuthStore.user">
            Logged in as {{ useAuthStore.user.email }} 
        </p>
        <nav>
            <NuxtLink to="/dashboard/saved">Saved Jobs</NuxtLink>
        </nav>
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