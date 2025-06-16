import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const { title, description } = to.meta
  const meta = document.querySelector('head meta[name="description"]') as HTMLMetaElement

  document.title = title
  meta.setAttribute('content', description)
})

export default router
