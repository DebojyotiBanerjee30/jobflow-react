const ErrorMessage = ({ title, message }) => {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
      <h2 className="font-semibold text-red-700">{title}</h2>

      <p className="mt-1 text-sm text-red-600">{message}</p>
    </div>
  );
};

export default ErrorMessage;
