export default {
  async contactDev(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://app-vue-c4cfa-default-rtdb.firebaseio.com/requests/${payload.devId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      },
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to request');
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.devId = payload.devId;
    context.commit('addRequest', newRequest);
  },
};
