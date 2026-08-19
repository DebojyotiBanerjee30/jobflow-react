import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-7xl font-bold text-gray-900">404</p>

      <h1 className="mb-3 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h1>

      <p className="mb-6 max-w-md text-gray-500">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
