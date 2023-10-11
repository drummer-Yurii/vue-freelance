import { createRouter, createWebHistory } from 'vue-router';
import DevList from '@/pages/devs/DevList';
import DevDetails from '@/pages/devs/DevDetails';
import ContactDev from '@/pages/requests/ContactDev';
import DevRegistration from '@/pages/devs/DevRegistration';
import RequestsReceived from '@/pages/requests/RequestsReceived';
import NotFound from '@/pages/NotFound';
import UserAuth from './pages/Auth/UserAuth.vue';
import store from './store/modules/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/devs' },
    { path: '/devs', component: DevList },
    {
      path: '/devs/:id',
      component: DevDetails,
      props: true,
      children: [{ path: 'contact', component: ContactDev }],
    },
    { path: '/register', component: DevRegistration, meta: { requiredAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { requiredAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiredUnAuth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiredAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiredAuth && store.getters.isAuthenticated) {
    next('devs');
  } else {
    next();
  }
});

export default router;
