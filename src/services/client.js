import axios from "axios";
import { generateApiEndpoint } from "../helpers";
import appConfig from "../config";

const { localStorageKeys } = appConfig;

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, accessToken = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(accessToken);
    }
  });

  failedQueue = [];
};

axios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(localStorageKeys.accessToken);

    // Set necessary headers.
    if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["Client-Id"] = appConfig.clientId;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const refreshToken = localStorage.getItem(localStorageKeys.refreshToken);
    if (refreshToken) {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((accessToken) => {
              originalRequest.headers["Authorization"] =
                "Bearer " + accessToken;
              return axios(originalRequest);
            })
            .catch((err) => {
              return err;
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;
        const endpoint = generateApiEndpoint("auth/refresh");
        return new Promise((resolve, reject) => {
          axios
            .post(endpoint, { refreshToken })
            .then((result) => {
              localStorage.setItem(
                localStorageKeys.accessToken,
                result.data.access_token
              );
              localStorage.setItem(
                localStorageKeys.refreshToken,
                result.data.refresh_token
              );

              axios.defaults.headers.common["Authorization"] =
                "Bearer " + result.data.access_token;
              originalRequest.headers["Authorization"] =
                "Bearer " + result.data.access_token;

              processQueue(null, result.data.access_token);
              resolve(axios(originalRequest));
            })
            .catch((err) => {
              processQueue(err, null);
              reject(err);
            })
            .then(() => {
              isRefreshing = false;
            });
        });
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
