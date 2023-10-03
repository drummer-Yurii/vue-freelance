import { createRouter, createWebHistory } from 'vue-router';
import DevList from '@/pages/devs/DevList';
import DevDetails from '@/pages/devs/DevDetails';
import ContactDev from '@/pages/requests/ContactDev';
import DevRegistration from '@/pages/devs/DevRegistration';
import RequestsReceived from '@/pages/requests/RequestsReceived';
import NotFound from '@/pages/NotFound';

const router = createRouter({
  history: createWebHistory,
  routes: [
    { path: '/devs', component: DevList },
    {
      path: '/devs/:id',
      component: DevDetails,
      children: [{ path: '/contact', component: ContactDev }],
    },
    { path: '/register', component: DevRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
