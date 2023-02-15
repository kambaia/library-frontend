import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_REST_API_ENDPOINT, // TODO: take this api URL from env
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("@bucaso:token") as string;;
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Change response data/error here
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
    ) {
      localStorage.remove("auth_token");
      localStorage.remove("auth_permissions");
    }
    return Promise.reject(error);
  }
);

export default http;
