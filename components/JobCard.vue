<template>
    <article class="job-card">
        <h2>{{ job.title }}</h2>
        <NuxtLink :to="`/jobs/${job.id}`">
            View details
        </NuxtLink>

        <button
            @click="save"
            :disabled="isSaved"
            >
            {{ isSaved ? 'Saved' : 'Save' }}
        </button>

    </article>
</template>

<script setup>
import { useJobStore } from '~/stores/job';

  const props =  defineProps({
        job: {
            type: Object,
            required: true
        }
    })

    const jobStore = useJobStore()

    const isSaved = computed(() =>
        jobStore.savedJobs.some(j => j.id === props.job.id)
    )

</script>