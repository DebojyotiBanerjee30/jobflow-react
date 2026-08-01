import { useEffect, useState } from "react";
import { getApplications } from "../services/applicationService";
import SearchBar from "../components/jobs/SearchBar";
import StatusFilter from "../components/jobs/StatusFilter";
import SortDropdown from "../components/jobs/SortDropdown";
import ApplicationsTable from "../components/jobs/ApplicationsTable";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await getApplications();
        setApplications(data);
      } catch (error) {
        setError(error.message || "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

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

  if (error) {
    return <p>{error}</p>;
  }

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

      <ApplicationsTable
        isLoading={isLoading}
        applications={sortedApplications}
      />
    </div>
  );
};

export default Applications;
