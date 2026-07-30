import { useState, useEffect } from "react";
import { getApplications } from "../services/applicationService";
import StatCard from "../components/dashboard/StatCard";
import EmptyState from "../components/ui/EmptyState";
import DashBoardSkeleton from "../components/ui/DashBoardSkeleton";
import RecentApplications from "../components/dashboard/RecentApplications";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const stats = [
    {
      title: "Total Applications",
      value: applications.length,
      color: "text-blue-600",
    },
    {
      title: "Interviews",
      value: applications.filter(
        (application) => application.status === "Interview",
      ).length,
      color: "text-yellow-500",
    },
    {
      title: "Offers",
      value: applications.filter(
        (application) => application.status === "Offer",
      ).length,
      color: "text-green-600",
    },
    {
      title: "Rejected",
      value: applications.filter(
        (application) => application.status === "Rejected",
      ).length,
      color: "text-red-600",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await getApplications();

        setApplications(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

        <p className="mt-2 text-gray-600">
          Welcome back! Here's an overview of your job applications.
        </p>
      </div>
      {isLoading ? (
        <DashBoardSkeleton />
      ) : error ? (
        <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                color={stat.color}
              />
            ))}
          </div>

          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-semibold">Recent Applications</h2>

            {applications.length === 0 ? (
              <EmptyState
                title="No applications found"
                description="Try creating your first application."
              />
            ) : (
              <RecentApplications applications={applications} />
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default Dashboard;
