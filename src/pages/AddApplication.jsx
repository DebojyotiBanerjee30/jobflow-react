import { useState } from "react";
import { useNavigate } from "react-router";
import { createApplication } from "../services/applicationService.js";
import ApplicationForm from "../components/jobs/ApplicationForm";

const AddApplication = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCreateApplication = async (formData) => {
    try {
      setError("");
      setIsLoading(true);

      await createApplication(formData);

      navigate("/");
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ApplicationForm
      title="Add Application"
      description="Fill out the information below to create a new job application."
      submitLabel="Save Application"
      loadingLabel="Saving..."
      onSubmit={handleCreateApplication}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default AddApplication;
