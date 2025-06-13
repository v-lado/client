<template>
  <v-data-table-server
    v-model:items-per-page="query.limit"
    :headers="headers"
    :items="store.municipalities"
    :loading="isLoading"
    item-value="name"
    @update:options="store.filterBy(query)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTemperaturesStore } from '@/stores/temperatures'

const store = useTemperaturesStore()
const loading = ref(false)

const query = ref({
  search: '',
  sort: 'id',
  limit: 10,
  offset: 0
})

const headers = ref([
  { title: 'Senzor', key: 'name' },
  { title: 'Názov', key: 'location' },
  { title: 'Teplota', key: 'temperature' }
])

const loadItems = async () =>{
  isLoading.value = true
  await store.filterBy(query)
  isLoading.value = false
}
</script>
