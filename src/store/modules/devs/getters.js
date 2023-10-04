export default {
  devs(state) {
    return state.devs;
  },
  hasDev(state) {
    return state.devs && state.devs.length > 0;
  },
};
