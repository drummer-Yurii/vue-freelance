import { createStore } from 'vuex';
import devModule from './devs/states';
import requestModule from './requests/states';

const store = createStore({
  modules: {
    devModule,
    requestModule,
  },
});

export default store;