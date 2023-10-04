import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/modules/store';
import BaseCard from '@/pages/components/ui/BaseCard';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-card', BaseCard);

app.mount('#app');
