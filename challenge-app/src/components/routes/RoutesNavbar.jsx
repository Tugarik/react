import { Link } from "react-router-dom";

export default function RoutesNavbar({ getSection }) {
  return (
    <div className="routesNavbar">
      <ul>
        <li>
          <Link to="/" className="challengeBtn">
            Challenge Home
          </Link>
        </li>
        <li>
          <Link to="html">HTML</Link>
        </li>
        <li>
          <Link
            to="css"
            onClick={() => {
              getSection("css");
            }}
          >
            CSS
          </Link>
        </li>
        <li>
          <Link
            to="bootstrap"
            onClick={() => {
              getSection("bootstrap");
            }}
          >
            BOOTSTRAP
          </Link>
        </li>
        <li>
          <Link to="javascript">JAVASCRIPT</Link>
        </li>
        <li>
          <Link to="react">REACT</Link>
        </li>
      </ul>
      <div>
        <h3>Routes Navigation</h3>
      </div>
    </div>
  );
}
