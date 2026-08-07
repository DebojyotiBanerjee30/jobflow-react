import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getApplications,
  deleteApplication as deleteApplicationService,
  createApplication as createApplicationService,
  updateApplication as updateApplicationService,
} from "../../services/applicationService";

const initialState = {
  applications: [],
  isLoading: false,
  error: null,
};

export const fetchApplications = createAsyncThunk(
  "application/fetchApplications",
  async () => {
    const data = await getApplications();
    return data;
  },
);

export const deleteApplication = createAsyncThunk(
  "application/deleteApplication",
  async (id) => {
    await deleteApplicationService(id);

    return id;
  },
);

export const createApplication = createAsyncThunk(
  "application/createApplication",
  async (formData) => {
    const data = await createApplicationService(formData);

    return data;
  },
);

export const updateApplication = createAsyncThunk(
  "application/updateApplication",
  async ({ id, formData }) => {
    const data = await updateApplicationService(id, formData);

    return data;
  },
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.applications = action.payload;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteApplication.fulfilled, (state, action) => {
        state.applications = state.applications.filter(
          (application) => application.id !== action.payload,
        );
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.applications.push(action.payload);
      })
      .addCase(updateApplication.fulfilled, (state, action) => {
        const index = state.applications.findIndex(
          (application) => application.id === action.payload.id,
        );

        if (index !== -1) {
          state.applications[index] = action.payload;
        }
      });
  },
});

export default applicationSlice.reducer;
