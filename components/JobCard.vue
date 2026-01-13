<template>
    <article class="job-card">
        <h2>{{ job.title }}</h2>
        <NuxtLink :to="`/jobs/${job.id}`">
            View details
        </NuxtLink>
    </article>
</template>

<script setup>
    defineProps({
        job: {
            type: Object,
            required: true
        }
    })
</script>