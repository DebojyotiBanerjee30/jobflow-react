const BASE_URL = "http://localhost:3000/users";

export const loginUser = async (userCredential) => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const users = await response.json();

  const user = users.find(
    (user) =>
      user.email === userCredential.email &&
      user.password === userCredential.password,
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const { password, ...safeUser } = user;

  return {
    user: safeUser,
    token: "iahsis-shdis-wshjd",
  };
};
