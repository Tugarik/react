import "../styles/Home.css";
import HomeNav from "../components/HomeNav";
import Slider from "../components/Slider";
import Popular from "../components/Popular";
import SaleOffer from "../components/SaleOffer";
import Specials from "../components/Specials";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

export default function Home({ loginRole }) {
  return (
    <div className="Home">
      <HomeNav loginRole={loginRole} />
      <Slider />
      <Popular />
      <SaleOffer />
      <Specials />
      <Partners />
      <Footer />
    </div>
  );
}
