import { defineStore } from 'pinia'

export const useJobStore = defineStore ('job', {
    state: () => ({
        jobs:[] as any[],
        savedJobs: [] as any []
    }),

    actions: {
        async fetchJobs() {
            const { getJobs } = useApi()
            this.jobs = await getJobs() as any[]
        },

        saveJob(job: any){
            if (!this.savedJobs.find(j => j.id === job.id)) {
                this.savedJobs.push(job)
            }
        }

    },
})