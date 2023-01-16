import Slider from "../components/subComps/Slider";
import Popular from "../components/subComps/Popular";
import Sale from "../components/subComps/Sale";
import Special from "../components/subComps/Special";
import Partners from "../components/subComps/Partners";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="container-lg">
            <Navigation />
            <Slider />
            <Popular />
            <Sale />
            <Special />
            <Partners />
            <Footer />
        </div>
    );
}
