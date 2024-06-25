import { createApp } from 'vue'
import { Quasar, QBtn, QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QPageContainer, QPage, QFooter } from 'quasar'
import App from './App.vue'
import router from './router/router.js' // Pastikan path ini sesuai dengan struktur proyek Anda
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(Quasar, {
  config: {
    brand: {
      primary: '#7469B6',
      secondary: '#AD88C6',
      accent: '#E1AFD1',
      info: '#FFE6E6'
    }
  },
  components: { QBtn, QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QPageContainer, QPage, QFooter }
})

app.use(router)
app.use(createPinia())
app.mount('#app')
