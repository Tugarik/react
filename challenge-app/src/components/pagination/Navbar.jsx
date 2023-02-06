import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="challengeBtn">
          Challenge Home
        </Link>
        <div>
          <h3>Pagination Navigation</h3>
        </div>
        <div></div>
      </div>
    </>
  );
}
