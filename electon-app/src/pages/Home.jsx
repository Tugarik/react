import "../styles/Home.css";
import HomeNav from "../components/subComps/HomeNav";
import Specials from "../components/Specials";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


export default function Home() {
  
  return (
    <div className="Home">
      <HomeNav />
      <Outlet />
      <Specials />
      <Partners />
      <Footer />
    </div>
  );
}
