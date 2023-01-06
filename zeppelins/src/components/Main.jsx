import "./styles/main.css";
import Data from "./data/Data";
import Card from "./Card";

export default function Main() {
  return (
    <div className="main">
      <div className="filters">
        <button className="all">All</button>
        <button className="ui">UI Design</button>
        <button className="ux">UX Design</button>
        <button className="pd">Product Design</button>
        <button className="art">Articles</button>
        <button className="tut">Tutorials</button>
        <button className="news">News</button>
      </div>
      <div className="stage">
        {Data.map((item, index) => (
          <div key={index}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
