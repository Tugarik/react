import HomeNav from '../components/HomeNav';
import Slider from '../components/Slider';
import Popular from '../components/Popular';
import SaleOffer from '../components/SaleOffer';
import Specials from '../components/Specials';
import Partners from '../components/Partners';
import '../styles/Home.css'
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className='Home'>
            <HomeNav />
            <Slider />
            <Popular />
            <SaleOffer />
            <Specials />
            <Partners />
            <Footer />
        </div>
    );
}