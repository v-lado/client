<template>
  <v-app full-height>
    <v-app-bar :order="-1" color="grey-lighten-2" flat>
      <v-app-bar-title>TEMP SK</v-app-bar-title>

      <v-btn icon="$home" title="Úvod" @click="go('home')" />
      <v-btn icon="$info" title="Info" @click="go('info')" />
    </v-app-bar>

    <v-main>
      <Router-View />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import 'vuetify/styles/main.css'
import { useRouter } from 'vue-router'

const router = useRouter()

const go = (to: string) => {
  if (!document.startViewTransition) {
    router.push({ name: to })
    return
  }
  
  document.startViewTransition(() => router.push({ name: to }))
}
</script>
