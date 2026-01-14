export const useApi = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com'

  const getJobs = () => {
    return $fetch(`${baseUrl}/posts`)
  }

  const getJobById = (id: string | number) => {
    return $fetch(`${baseUrl}/posts/${id}`)
  }

  return {
    getJobs,
    getJobById
  }
}
