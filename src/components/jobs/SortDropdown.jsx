const SortDropdown = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
    >
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
    </select>
  );
};

export default SortDropdown;
