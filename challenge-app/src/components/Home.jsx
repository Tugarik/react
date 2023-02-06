import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="challengeHome">
      <h1>Challenges</h1>
      <ul>
        <li>
          <Link to={"/pagination/pages"} className="challengeBtn">
            Pagination
          </Link>
        </li>
        <li>
          <Link to={"/routes/html"} className="challengeBtn">
            Routes
          </Link>
        </li>
      </ul>
    </div>
  );
}
