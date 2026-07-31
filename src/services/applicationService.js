const BASE_URL = "http://localhost:3000/applications";

export const getApplications = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch applications");
  }

  return await response.json();
};

export const createApplication = async (formData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to create application");
  }

  return await response.json();
};
