import AliceCarousel from "react-alice-carousel";
import SliderItem from "./subComps/SliderItem";

export default function Slider() {
  return (
    <div className="Slider">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </AliceCarousel>
    </div>
  );
}
