import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.mount('#app')

// Initialize AOS (Animate On Scroll)
AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic' })
