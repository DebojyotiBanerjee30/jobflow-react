const StatCard = ({ title, value, color = "text-blue-600" }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>

      <p className={`mt-3 text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
};

export default StatCard;
