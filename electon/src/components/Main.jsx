import Slider from "./subComps/Slider";
import Popular from "./subComps/Popular";
import Sale from "./subComps/Sale";
import Special from "./subComps/Special";
import Partners from "./subComps/Partners";

export default function Main() {
  return (
    <div className="container-lg">
      <Slider />
      <Popular />
      <Sale/>
      <Special />
      <Partners />
    </div>
  );
}
