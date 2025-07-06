import { Outlet } from "react-router";
import Banner from "../shared/banner/Banner";
import Works from "../shared/how_its_work/Works";
import Services from "../shared/services/services";
import HopeCustomers from "../shared/hope_customer/HopeCustomers";
import OurPromise from "../shared/OurPromise/OurPromise";
import MerchantCard from "../shared/merchant_card/MerchantCard";
import CustomerResponse from "../shared/customer_response/CustomerResponse";
import Faq from "../shared/FAQ/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Works />       {/* how its works section*/}
      <Services />
      <HopeCustomers></HopeCustomers>
      <OurPromise></OurPromise>
      <MerchantCard></MerchantCard>
      <CustomerResponse></CustomerResponse>
      <Faq></Faq>
    </div>
  );
};

export default Home;
