import { useParams } from "react-router-dom";

export default function HtmlPage() {
  const { htmlId } = useParams();
  return (
    <div className="routesPage">
      <h2>HTML Page {htmlId ? htmlId : 1}</h2>
      <p>
        HTML Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
        perferendis temporibus reiciendis, corporis voluptatem architecto!
      </p>
    </div>
  );
}
