import { NavLink, Link } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice.js";
import Button from "../ui/Button.jsx";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "font-semibold text-blue-600"
    : "text-gray-700 transition-colors hover:text-blue-600";

function Navbar() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await dispatch(logout()).unwrap();
  };
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          JobFlow
        </Link>

        <div className="flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/applications" className={navLinkClass}>
            Applications
          </NavLink>

          <Link
            to="/applications/new"
            className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            + Add Job
          </Link>
          <Button onClick={handleLogout} className="cursor-pointer">
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
