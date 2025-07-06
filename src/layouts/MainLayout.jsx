import { Outlet } from "react-router";
import Footer from "../pages/home/shared/footer/Footer";
import Navbar from "../pages/home/shared/navbar/Navbar";
// import AOS from "aos";
import 'aos/dist/aos.css';
import Aos from "aos";
const MainLayout = () => {

  Aos.init({
    duration: 2000
  })

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
