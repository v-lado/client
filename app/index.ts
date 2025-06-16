import { createApp } from 'vue'

import pinia from '@/plugins/pinia'
import router from '@/plugins/router'
import vuetify from '@/plugins/vuetify'

import Layout from '@/layouts/Default.vue'

createApp(Layout)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('temp-sk.app')
