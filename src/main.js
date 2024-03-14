import { createApp } from 'vue'
import { mask } from "@/directives/mask.js";

import App from '@/App.vue'
import router from './router'

createApp(App).use(router)
//    .use(router)
    .directive('mask', mask)
    .mount('#app');
