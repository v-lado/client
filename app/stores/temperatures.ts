import { ref } from 'vue'
import { defineStore } from 'pinia'

import debounce from 'lodash/debounce'
import useAxios from '@/hooks/axios'

import type { AxiosRequestConfig } from 'axios'

export const useTemperaturesStore = defineStore('temperatures', () => {
  let controller: AbortController

  const { api } = useAxios()
  const municipalities = ref([])

  const filterBy = debounce((params: AxiosRequestConfig) => {
    controller && !controller.signal.aborted && controller.abort()
    controller = new AbortController()

    api.get('/municipalities', { params, signal: controller.signal })
      .then(({ data }) => municipalities.value = data)
      .then(() => controller.abort())
      .catch(e => { console.log(e.message) })
  }, 100)

  return { municipalities, filterBy }
})
