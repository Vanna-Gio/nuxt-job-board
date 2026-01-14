<template>
    <section>
        <h1>Login</h1>

        <form @submit.prevent="handleLogin">
            <input
                v-model="email"
                type="email"
                placeholder="Email"
                required
                />
            <button type="submit">Login</button>
        </form>
    </section>
</template>

<script setup>
    const authStore = useAuthStore()
    const router = useRouter()
    const email = ref('')

    const handleLogin = () => {
        authStore.login(email.value)
        router.push('/dashboard')
    }
</script>