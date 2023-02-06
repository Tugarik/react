import { Link } from "react-router-dom";

export default function RoutesNavbar() {
  return (
    <div className="routesNavbar">
      <Link to="/" className="challengeBtn">
        Challenge Home
      </Link>
      <div>
        <h3>Routes Navigation</h3>
      </div>
      <ul>
        <li>
          <Link to="./html">HTML</Link>
        </li>
        <li>
          <Link to="./javascript">JS</Link>
        </li>
        <li>
          <Link to="./react">REACT</Link>
        </li>
      </ul>
    </div>
  );
}
