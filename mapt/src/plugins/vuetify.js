import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

// import blueSky from '../theme/blueSky'
// import greenGrass from '../theme/greenGrass'
// import blackOps from '../theme/blackOps'
import roseRed from '../theme/roseRed'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: roseRed
    }
  }
})