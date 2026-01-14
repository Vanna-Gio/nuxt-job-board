<template>
    <article class="job-card">
        <h2>{{ job.title }}</h2>
        <NuxtLink :to="`/jobs/${job.id}`">
            View details
        </NuxtLink>

        <button @click="save">Save</button>
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

    const save =() => {
        jpbStore.saveJob(props.job)
    }
</script>