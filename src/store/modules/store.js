import { createStore } from 'vuex';
import devModule from './devs/states';
import requestModule from './requests/states';
import authModule from './auth/states';

const store = createStore({
  modules: {
    devModule,
    requestModule,
    authModule,
  },
});

export default store;
