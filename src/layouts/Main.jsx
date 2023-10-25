import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navber";
import Footer from "../pages/shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
