import { ref } from 'vue'
import { defineStore } from 'pinia'

import debounce from 'lodash/debounce'
import useAxios from '@/hooks/axios'

import type { SortItem } from 'vuetify/lib/components/VDataTable/composables/sort.mjs'

export const useTableData = defineStore('tableData', () => {
  let controller: AbortController

  const { api, Endpoints } = useAxios()

  const tableData = ref({
    items: [],
    itemsLength: 0,
    page: 1,
    pagesCount: 1,

    headers: [
      { title: 'Senzor', key: 'name' },
      { title: 'Názov', key: 'location' },
      { title: 'Teplota', key: 'temperature' }
    ],

    query: {
      search: '',
      sort: '',
      order: '',
      limit: 10,
      offset: 0,
    },

    sortBy: [] as SortItem[]
  })

  const getTableData = debounce(options => {
    controller && !controller.signal.aborted && controller.abort()
    controller = new AbortController()

    tableData.value.query.sort = tableData.value.sortBy[0]?.key as string
    tableData.value.query.order = tableData.value.sortBy[0]?.order as string
    tableData.value.page = options.page
    tableData.value.query.offset = (options.page - 1) * options.itemsPerPage

    api
      .get(Endpoints.TEMP, { params: tableData.value.query, signal: controller.signal })
      .then(({ data }) => {
        if (data.items.length) {
          tableData.value.items = data.items
          tableData.value.itemsLength = data.count
          tableData.value.pagesCount = Math.ceil(data.count / options.itemPerPage)
        } else {
          tableData.value.items = []
          tableData.value.itemsLength = 0
        }
      })
      .then(() => controller.abort())
      .catch(e => {console.log(e.message)})
  }, 300)

  return { tableData, getTableData }
})
