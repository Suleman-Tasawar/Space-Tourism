import { Outlet } from "react-router-dom";
import Navigation from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
