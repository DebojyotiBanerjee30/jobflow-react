import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import App from "./App";
import "react-loading-skeleton/dist/skeleton.css";
import keycloak from "./config/keycloak";
import { setAuth } from "./features/auth/authSlice";

const initApp = async () => {
  try {
    const authenticated = await keycloak.init({
      onLoad: "check-sso",
      pkceMethod: "S256",
    });

    console.log("Keycloak initialized:", authenticated);

    if (authenticated) {
      store.dispatch(
        setAuth({
          user: keycloak.tokenParsed,
          token: keycloak.token,
        }),
      );
    }

    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>,
    );
  } catch (error) {
    console.error("Keycloak initialization failed:", error);
  }
};

initApp();
