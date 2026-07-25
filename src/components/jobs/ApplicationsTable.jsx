import StatusBadge from "./StatusBadge";
import EmptyState from "../ui/EmptyState";
import { SearchX } from "lucide-react";

const ApplicationsTable = ({ applications }) => {
  if (applications.length === 0) {
    return (
      <EmptyState
        icon={<SearchX className="h-12 w-12 text-gray-400" />}
        title="No applications found"
        description="Try changing your search or filter criteria."
      />
    );
  }
  if (applications.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 bg-white py-12 text-center">
        <p className="text-2xl">🔍</p>

        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          No applications found
        </h3>

        <p className="mt-2 text-gray-500">
          Try changing your search or filter criteria.
        </p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left">Company</th>
            <th className="px-6 py-3 text-left">Position</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Applied Date</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((application) => (
            <tr key={application.id} className="border-t border-gray-200">
              <td className="px-6 py-4">{application.company}</td>

              <td className="px-6 py-4">{application.position}</td>

              <td className="px-6 py-4">
                <StatusBadge status={application.status} />
              </td>

              <td className="px-6 py-4">{application.appliedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsTable;
