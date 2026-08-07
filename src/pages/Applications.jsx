import { useDispatch, useSelector } from "react-redux";
import {
  fetchApplications,
  deleteApplication,
} from "../features/applications/applicationSlice.js";
import { useEffect, useState } from "react";
import SearchBar from "../components/jobs/SearchBar";
import StatusFilter from "../components/jobs/StatusFilter";
import SortDropdown from "../components/jobs/SortDropdown";
import ConfirmModal from "../components/ui/ConfirmModal";
import ErrorMessage from "../components/ui/ErrorMessage";
import ApplicationsTable from "../components/jobs/ApplicationsTable";

const Applications = () => {
  const dispatch = useDispatch();

  const { applications, isLoading, error } = useSelector(
    (state) => state.application,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  const normalizedSearchTerm = searchTerm.toLowerCase();

  const filteredApplications = applications.filter((application) => {
    const matchesSearch =
      application.company.toLowerCase().includes(normalizedSearchTerm) ||
      application.position.toLowerCase().includes(normalizedSearchTerm);

    const matchesStatus = status === "All" || application.status === status;

    return matchesSearch && matchesStatus;
  });

  const sortedApplications = [...filteredApplications].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.appliedDate) - new Date(a.appliedDate);
    }

    return new Date(a.appliedDate) - new Date(b.appliedDate);
  });

  const handleOpenDeleteModal = (application) => {
    setSelectedApplication(application);
    setDeleteError("");
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedApplication(null);
    setDeleteError("");
    setIsDeleteModalOpen(false);
  };

  const handleDeleteApplication = async () => {
    if (!selectedApplication) return;
    try {
      setDeleteError("");
      setIsDeleting(true);

      await dispatch(deleteApplication(selectedApplication.id)).unwrap();

      handleCloseDeleteModal();
    } catch (error) {
      setDeleteError(error.message || "Failed to delete application.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Applications</h1>

      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <StatusFilter
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <SortDropdown
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        />
      </div>

      {error ? (
        <ErrorMessage title="Failed to load applications" message={error} />
      ) : (
        <ApplicationsTable
          applications={sortedApplications}
          isLoading={isLoading}
          onDelete={handleOpenDeleteModal}
        />
      )}

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="Delete Application"
        message={`Are you sure you want to delete "${selectedApplication?.company}"?`}
        confirmLabel="Delete"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleDeleteApplication}
        isLoading={isDeleting}
        error={deleteError}
      />
    </div>
  );
};

export default Applications;
