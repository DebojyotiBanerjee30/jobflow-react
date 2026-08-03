import StatusBadge from "./StatusBadge";
import EmptyState from "../ui/EmptyState";
import { SearchX } from "lucide-react";
import TableSkeleton from "../ui/TableSkeleton";
import Button from "../ui/Button";
import { Link } from "react-router";
import { Pencil } from "lucide-react";

const ApplicationsTable = ({ applications, isLoading, onDelete }) => {
  if (isLoading) {
    return <TableSkeleton />;
  }
  if (applications.length === 0) {
    return (
      <EmptyState
        icon={<SearchX className="h-12 w-12 text-gray-400" />}
        title="No applications found"
        description="Try changing your search or filter criteria."
      />
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
            <th className="px-6 py-3 text-left">Actions</th>
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
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <Link
                    to={`/applications/edit/${application.id}`}
                    className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    <Pencil size={16} />
                    Edit
                  </Link>

                  <Button
                    variant="danger"
                    onClick={() => onDelete(application)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsTable;
