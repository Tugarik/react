import "../styles/Home.css";
import HomeNav from "../components/subComps/HomeNav";
import Specials from "../components/Specials";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Home({ loginRole }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="Home">
      <HomeNav loginRole={loginRole} />
      <Outlet />
      <Specials />
      <Partners />
      <Footer />
    </div>
  );
}
