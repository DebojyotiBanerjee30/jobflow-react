import api from "./api.js";

export const getApplications = async () => {
  const response = await api.get("/applications");
  return response.data;
};

export const createApplication = async (formData) => {
  const response = await api.post("/applications", formData);
  return response.data;
};

export const getApplicationById = async (id) => {
  const response = await api.get(`/applications/${id}`);
  return response.data;
};

export const updateApplication = async (id, formData) => {
  const response = await api.put(`/applications/${id}`, formData);
  return response.data;
};

export const deleteApplication = async (id) => {
  await api.delete(`/applications/${id}`);
};

export const searchApplications = async (searchTerm) => {
  const response = await api.get(
    `/applications?company:contains=${encodeURIComponent(searchTerm)}`,
  );

  return response.data;
};
