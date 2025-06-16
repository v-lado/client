import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiHome, mdiInformation, mdiMagnify } from '@mdi/js'

const config = {
  icons: {
    defaultSet: 'mdi',

    aliases: {
      ...aliases,
      home: mdiHome,
      info: mdiInformation,
      search: mdiMagnify
    },

    sets: {
      mdi
    }
  }
}

export default createVuetify(config)
