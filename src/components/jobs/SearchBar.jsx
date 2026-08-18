const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by company..."
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
    />
  );
};

export default SearchBar;
