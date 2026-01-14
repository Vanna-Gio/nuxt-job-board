<template>
  <section>
    <h1>Saved Jobs</h1>

    <p v-if="savedJobs.length === 0">
      No saved jobs yet.
    </p>

    <JobCard
      v-for="job in savedJobs"
      :key="job.id"
      :job="job"
    />
  </section>
</template>

<script setup>
const jobStore = useJobStore()

const savedJobs = computed(() => jobStore.savedJobs)
</script>
