import { Outlet } from "react-router";
import Footer from "../pages/home/shared/footer/Footer";
import Navbar from "../pages/home/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
