import { sessionService, accountService } from "../../services";
import config from "../../config/environment";

const { localStorageKeys } = config;

const initialState = () => ({
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  currentUser: null,
  roles: [],
  isBusy: false,
  error: null, // ...
});

const state = initialState();

const actions = {
  getCurrentUser: (context, value) => {
    context.commit("getCurrentUser", value);
  },
  login: async (context, value) => {
    try {
      const result = await sessionService.login(value);
      if (result) {
        localStorage.setItem(localStorageKeys.accessToken, result.access_token);
        localStorage.setItem(
          localStorageKeys.refreshToken,
          result.refresh_token
        );
        localStorage.setItem(localStorageKeys.rememberMe, true);

        const currentUser = await accountService.getCurrentUser();

        const payload = {
          accessToken: result.access_token,
          refreshToken: result.refresh_token,
          currentUser: currentUser,
        };
        context.commit("login", payload);
      }
    } catch (err) {
      console.log(err);
    }
  },
  register: async (context, value) => {
    const result = await sessionService.register(value);
    if (result) {
      localStorage.setItem(localStorageKeys.accessToken, result.access_token);
      localStorage.setItem(localStorageKeys.refreshToken, result.refresh_token);
      localStorage.setItem(localStorageKeys.rememberMe, true);

      const currentUser = await accountService.getCurrentUser();

      const payload = {
        accessToken: result.access_token,
        refreshToken: result.refresh_token,
        currentUser: currentUser,
      };
      context.commit("register", payload);
    }
  },
};

const mutations = {
  getCurrentUser(state, data) {
    state = data;
  },
  login(state, data) {
    state = data;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
