const StatusFilter = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
    >
      <option value="All">All Status</option>
      <option value="Applied">Applied</option>
      <option value="Interview">Interview</option>
      <option value="Offer">Offer</option>
      <option value="Rejected">Rejected</option>
    </select>
  );
};

export default StatusFilter;
