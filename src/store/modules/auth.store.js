const initialState = () => ({
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    currentUser: null,
    roles: [],
    isBusy: false,
    error: null,    // ...   
  }
);

const state = initialState();

const actions = {
  getCurrentUser:(context, value) => {
    context.commit('getCurrentUser', value);
  }
}
const mutations = {
  getCurrentUser(state,data){
    state.user = data;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}