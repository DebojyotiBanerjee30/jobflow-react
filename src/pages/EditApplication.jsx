import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import FormSkeleton from "../components/jobs/FormSkeleton.jsx";
import ApplicationForm from "../components/jobs/ApplicationForm";
import {
  getApplicationById,
  updateApplication,
} from "../services/applicationService.js";

const EditApplication = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [application, setApplication] = useState(null);

  const [isFetching, setIsFetching] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fetchError, setFetchError] = useState("");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        setFetchError("");

        const data = await getApplicationById(id);

        setApplication(data);
      } catch (error) {
        setFetchError(error.message || "Failed to load application.");
      } finally {
        setIsFetching(false);
      }
    };

    fetchApplication();
  }, [id]);

  const handleUpdateApplication = async (formData) => {
    try {
      setSubmitError("");
      setIsSubmitting(true);
      await updateApplication(id, formData);

      navigate("/applications");
    } catch (error) {
      setSubmitError(
        error.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isFetching) {
    return <FormSkeleton />;
  }

  if (fetchError) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
        <h2 className="text-lg font-semibold text-red-700">
          Failed to load application
        </h2>

        <p className="mt-2 text-red-600">{fetchError}</p>
      </div>
    );
  }

  return (
    <ApplicationForm
      title="Edit Application"
      description="Update the information below."
      submitLabel="Update Application"
      loadingLabel="Updating..."
      isLoading={isSubmitting}
      error={submitError}
      onSubmit={handleUpdateApplication}
      initialValues={application}
    />
  );
};

export default EditApplication;
