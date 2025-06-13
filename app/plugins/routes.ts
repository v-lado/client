import HomeView from '@/views/Home.vue'
import InfoView from '@/views/Info.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    description: string
  }
}

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

    meta: {
      title: 'TEMP SK :: Úvod',
      description: 'Aktuálna teplota vzduchu v slovenských mestách'
    }
  },

  {
    path: '/info',
    name: 'info',
    component: InfoView,

    meta: {
      title: 'TEMP SK :: O aplikácii',
      description: 'Popis použitých technológií a postupov'
    }
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]
