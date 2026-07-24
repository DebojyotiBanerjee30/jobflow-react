import StatusBadge from "../jobs/StatusBadge";
import applications from "../../data/applications.js";

const RecentApplications = () => {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-semibold">Recent Applications</h2>

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
    </section>
  );
};

export default RecentApplications;
