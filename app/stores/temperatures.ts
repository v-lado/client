import { ref } from 'vue'
import { defineStore } from 'pinia'

import debounce from 'lodash/debounce'
import useAxios from '@/hooks/axios'

interface IQueryString {
  search?: string,
  sort?: string,
  limit?: number,
  offset?: number
}

export const useTemperaturesStore = defineStore('temperatures', () => {
  let controller: AbortController

  const { api } = useAxios()
  const municipalities = ref([])

  const filterBy = debounce((params: IQueryString) => {
    controller && !controller.signal.aborted && controller.abort()
    controller = new AbortController()

    api.get('/municipalities', { params, signal: controller.signal })
      .then(({ data }) => municipalities.value = data)
      .then(() => controller.abort())
      .catch(e => { console.log(e.message) })
  }, 100)

  return { municipalities, filterBy }
})
