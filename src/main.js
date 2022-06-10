import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Router from './conf/routes';
import { createPinia } from 'pinia';

createApp(App)
    .use(Router)
    .use(PrimeVue)
    .use(createPinia())
    .mount('#app');
