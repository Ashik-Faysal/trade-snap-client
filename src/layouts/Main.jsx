import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navber";
import Footer from "../pages/shared/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </>
  );
};

export default Main;
