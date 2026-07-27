const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",

  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

const baseClasses =
  "rounded-lg px-4 py-2 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const Button = ({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${baseClasses} ${
        variants[variant] || variants.primary
      } ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
