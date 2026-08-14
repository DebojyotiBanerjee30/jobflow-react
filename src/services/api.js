import axios from "axios";
import keycloak from "../config/keycloak";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(async (config) => {
  try {
    await keycloak.updateToken(30);

    if (keycloak.token) {
      config.headers.Authorization = `Bearer ${keycloak.token}`;
    }

    return config;
  } catch (error) {
    console.error("Token refresh failed:", error);

    await keycloak.logout({
      redirectUri: window.location.origin + "/login",
    });

    return Promise.reject(error);
  }
});

export default api;
