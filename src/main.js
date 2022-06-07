import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

createApp(App)
    .use(PrimeVue)
    .mount('#app')
