import keycloak from "../config/keycloak.js";
import Button from "../components/ui/Button";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    keycloak.login({
      redirectUri: window.location.origin + "/",
    });
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        {/* Branding */}

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">JobFlow</h1>
          <p className="mt-2 text-gray-600">
            Manage your job applications with ease.
          </p>
        </div>

        {/* Login Card */}

        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Welcome back
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Sign in to continue to your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mt-8">
              <Button type="submit" className="w-full cursor-pointer">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
