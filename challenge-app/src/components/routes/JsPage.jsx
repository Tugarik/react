import { useParams } from "react-router-dom";

export default function JsPage() {
  const { jsId } = useParams();
  return (
    <div className="routesPage">
      <h2>Javascript Page {jsId ? jsId : 1}</h2>
      <p>
        Javascript Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Iste perferendis temporibus reiciendis, corporis voluptatem architecto!
        ß perferendis temporibus reiciendis, corporis voluptatem architecto!
      </p>
    </div>
  );
}
