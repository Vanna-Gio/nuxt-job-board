import { defineStore } from 'pinia'

export const useAuthStore = defineStore ('auth', {
    state: () => ({
        user: null as any,
        token: null as string | null
    }),

    actions: {
        login(email: string) {
            // fake login for now
            this.user = { email }
            this.token = 'fake-jwt-token'
        },

        logout() {
            this.user = null
            this.token = null
        }
    }
})