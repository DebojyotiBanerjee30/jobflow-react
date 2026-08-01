import Skeleton from "react-loading-skeleton";

const TableSkeleton = () => {
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
          <tr className="border-t border-gray-200">
            <td className="px-6 py-4">
              <Skeleton width={80} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={120} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={40} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={120} height={20} />
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-6 py-4">
              <Skeleton width={80} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={120} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={40} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={120} height={20} />
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-6 py-4">
              <Skeleton width={80} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={120} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={40} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={120} height={20} />
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-6 py-4">
              <Skeleton width={80} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={120} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={40} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={120} height={20} />
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-6 py-4">
              <Skeleton width={80} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={120} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={40} height={20} />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={120} height={20} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
