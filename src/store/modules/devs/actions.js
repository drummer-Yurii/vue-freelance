export default {
  async regDev(context, data) {
    const userId = context.rootGetters.userId;
    const devData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    context.commit('registerDev', devData);
    const response = await fetch(
      `https://app-vue-c4cfa-default-rtdb.firebaseio.com/devs/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(devData),
      },
    );
    if (!response.ok) {
      // err
    }
    context.commit('registerDev', {
      ...devData,
      id: userId,
    });
  },
};
