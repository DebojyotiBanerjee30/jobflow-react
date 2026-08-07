import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import ErrorMessage from "../components/ui/ErrorMessage.jsx";
import FormSkeleton from "../components/jobs/FormSkeleton.jsx";
import ApplicationForm from "../components/jobs/ApplicationForm";
import { getApplicationById } from "../services/applicationService.js";
import { useDispatch } from "react-redux";
import { updateApplication } from "../features/applications/applicationSlice";

const EditApplication = () => {
  const dispatch = useDispatch();
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
      await dispatch(
        updateApplication({
          id,
          formData,
        }),
      ).unwrap();

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
      <ErrorMessage title="Failed to load application" message={fetchError} />
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
