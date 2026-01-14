<template>
    <section>
        <h1>Available Jobs</h1>

        <div v-if="pending">Loading jobs...</div>
        <div v-else-if="error">Failed to load jobs</div>

        <div v-else>
            <JobCard 
                v-for="job in jobs"
                :key="job.id"
                :job="job"
            />

        </div>
    </section>
</template>
<script setup>
import { useJobStore } from '~/stores/job';

useHead({
  title: 'Job Listings | Nuxt Job Board',
  meta: [
    {
      name: 'description',
      content: 'Browse frontend jobs built with Nuxt and Vue.'
    }
  ]
})

const jobStore = useJobStore()

const { data, pending, error } = await useAsyncData('jobs', async () => {
    await jobStore.fetchJobs()
    return jobStore.jobs
})

const jobs = computed(() => data.value || [])
</script>
