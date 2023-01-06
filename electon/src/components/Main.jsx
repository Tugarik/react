import Filter from "./subComps/FIlter";
import Partners from "./subComps/Partners";
import Slider from "./subComps/Slider";
import Special from "./subComps/Special";

export default function Main() {
  return (
    <div className="container-lg">
      <Slider />
      <Filter />
      <img src="" alt="special_img" className="saleOffer" />
      <Special />
      <Partners />
    </div>
  );
}
