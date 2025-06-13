import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiHome, mdiInformation } from '@mdi/js'

const config = {
  icons: {
    defaultSet: 'mdi',

    aliases: {
      ...aliases,
      home: mdiHome,
      info: mdiInformation
    },

    sets: {
      mdi
    }
  }
}

export default createVuetify(config)
