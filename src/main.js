import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./expand/router.js";
import {store} from "./expand/store.js";
import animated  from 'animate.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(animated)
app.mount('#app')