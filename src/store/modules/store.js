import { createStore } from 'vuex';
import devModule from './devs/states';
import requestModule from './requests/states';

const store = createStore({
  modules: {
    devModule,
    requestModule,
  },
  state() {
    return {
      userId: 'd3',
    };
  },
});

export default store;
