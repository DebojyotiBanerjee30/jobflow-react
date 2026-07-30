const BASE_URL = "http://localhost:3000/applications";

export const getApplications = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch applications");
  }

  return await response.json();
};
