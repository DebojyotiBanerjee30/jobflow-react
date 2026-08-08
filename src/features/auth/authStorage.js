const AUTH_KEY = "auth";

export const saveAuth = (authData) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
};

export const getStoredAuth = () => {
  const storedAuth = localStorage.getItem(AUTH_KEY);

  if (!storedAuth) {
    return null;
  }

  return JSON.parse(storedAuth);
};

export const clearAuth = () => {
  localStorage.removeItem(AUTH_KEY);
};
