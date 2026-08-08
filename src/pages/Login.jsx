import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../features/auth/authSlice.js";
import { useState } from "react";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(loginUser(formData)).unwrap();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Welcome back
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Sign in to continue to your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <InputField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <p
                className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-600"
                role="alert"
              >
                {error}
              </p>
            )}

            <div className="mt-8">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer"
              >
                {isLoading ? "Logging in.." : "Login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
