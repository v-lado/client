<template>
  <v-card title="Teplota vzduchu" flat>
    <template v-slot:text>
      <v-text-field
        v-model="store.tableData.query.search"
        prepend-inner-icon="$search"
        variant="outlined"
        density="compact"
        hide-details
        single-line
        placeholder="hľadať"
      ></v-text-field>
    </template>

    <v-data-table-server
      v-model:sort-by="store.tableData.sortBy"
      v-model:items-per-page="store.tableData.query.limit"
      :headers="store.tableData.headers"
      :items="store.tableData.items"
      :itemsLength="store.tableData.itemsLength"
      :page="store.tableData.page"
      :pagesCount="store.tableData.pagesCount"
      :search="store.tableData.query.search"
      item-value="name"
      density="compact"
      first-page-label="Prvá strana"
      last-page-label="Posledná strana"
      next-page-label="Ďalšia strana"
      prev-page-label="Predošlá strana"
      page-text="Strana"
      items-per-page-text="Riadkov na stranu:"
      no-data-text="Žiadne údaje na zobrazenie"
      show-current-page
      @update:options="store.getTableData"
    >
      <template #item.temperature="{ value }">
        <v-chip
          :border="`${getColor(value)} thin opacity-25`"
          :color="getColor(value)"
          :text="value.toFixed(1)"
          size="small"
        />
      </template>
    </v-data-table-server>
  </v-card>
</template>

<script setup lang="ts">
import inRange from 'lodash/inRange'
import { useTableData } from '@/stores/table-data'

const store = useTableData()

const getColor = (temperature: number) => {
  if (temperature < 18) return 'info'
  else if (inRange(temperature, 18, 23.1)) return 'success'
  else return 'error'
}
</script>
