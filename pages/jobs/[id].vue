<template>
  <section>
    <div v-if="pending">Loading job...</div>
    <div v-else-if="error">Failed to load job</div>
    <div v-else>
      <h1>{{ job.title }}</h1>
      <p>{{ job.body }}</p>
      <NuxtLink to="/jobs">Back to jobs</NuxtLink>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const { getJobById } = useApi()

const { data: job, pending, error } = await useAsyncData(
  `job-${route.params.id}`,
  () => getJobById(route.params.id)
)

useHead({
  title: job.value ? job.value.title : 'Job Detail | Nuxt Job Board',
  meta: [
    {
      name: 'description',
      content: job.value
        ? job.value.body.slice(0, 150)
        : 'Job details page'
    }
  ]
})
</script>

