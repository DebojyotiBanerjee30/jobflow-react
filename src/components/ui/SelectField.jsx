const SelectField = ({ label, name, disabled, error, options, ...props }) => {
  return (
    <div>
      <label
        className="mb-2 block text-sm font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        disabled={disabled}
        className="w-full rounded-lg border border-gray-300 px-4 py-2"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default SelectField;
