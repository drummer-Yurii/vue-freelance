export default {
//   login(context, payload) {},
  async signup(context, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAngSMfNudC_FLg7J58NjZj-CupcBWYiVQ`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnServiceToken: true,
        }),
      },
    );
    const responseData = await response.json();
    if (!response.ok) {
      console.log(response);
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }
    console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
