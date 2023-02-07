import { useParams } from "react-router-dom";

export default function SidePage({ val }) {
  const { reactId } = useParams();
  return (
    <div className="routesPage">
      <h2>
        {val} Page {reactId ? reactId : 1}
      </h2>
      <p>
        React Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
        perferendis temporibus reiciendis, corporis voluptatem architecto! React
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
        perferendis temporibus reiciendis, corporis voluptatem architecto!
        ßerendis temporibus reiciendis, corporis voluptatem architecto!
      </p>
    </div>
  );
}
