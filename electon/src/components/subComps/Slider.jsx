import SliderItem from "./SliderItem";
import AliceCarousel from "react-alice-carousel";

export default function Slider() {
    return (
        <div className="slider">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <SliderItem />
                <SliderItem />
                <SliderItem />
            </AliceCarousel>
        </div>
    );
}
