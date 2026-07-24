import StatCard from "../components/dashboard/StatCard";
import RecentApplications from "../components/dashboard/RecentApplications";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Applications",
      value: 128,
      color: "text-blue-600",
    },
    {
      title: "Interviews",
      value: 12,
      color: "text-yellow-500",
    },
    {
      title: "Offers",
      value: 3,
      color: "text-green-600",
    },
    {
      title: "Rejected",
      value: 18,
      color: "text-red-600",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

        <p className="mt-2 text-gray-600">
          Welcome back! Here's an overview of your job applications.
        </p>
      </div>

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

      <RecentApplications />
    </div>
  );
};

export default Dashboard;
