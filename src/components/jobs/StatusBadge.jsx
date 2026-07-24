const statusStyles = {
  Applied: "bg-blue-100 text-blue-700",
  Interview: "bg-yellow-100 text-yellow-700",
  Offer: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

const StatusBadge = ({ status }) => {
  const badgeStyle = statusStyles[status] ?? "bg-gray-100 text-gray-700";
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${badgeStyle}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
