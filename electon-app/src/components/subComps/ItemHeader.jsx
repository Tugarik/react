import { Link, useNavigate } from "react-router-dom";
export default function ItemHeader() {
  const navigate = useNavigate();
  return (
    <div className="ItemHeader">
      <div className="container-lg d-flex justify-content-between">
        <div>
          <Link to={-1}>Back</Link>
        </div>
        <div>Middle</div>
        <div>
          <Link to={"../eb89f3b9"}>Next</Link>
        </div>
      </div>
    </div>
  );
}
