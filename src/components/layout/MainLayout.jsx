import Navbar from "./NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
