import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/modules/store';
import BaseCard from '@/pages/components/ui/BaseCard';
import BaseButton from './pages/components/ui/BaseButton.vue';
import BaseBadge from './pages/components/ui/BaseBadge.vue';
import BaseSpinner from '@/pages/components/ui/BaseSpinner';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
