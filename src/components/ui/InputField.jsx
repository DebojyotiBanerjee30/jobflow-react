const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  disabled,
  error,
  ...props
}) => {
  return (
    <div>
      <label
        className="mb-2 block text-sm font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="w-full rounded-lg border border-gray-300 px-4 py-2"
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
        id={name}
        type={type}
        onChange={onChange}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
