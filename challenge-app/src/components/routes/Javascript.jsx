import { Link, Outlet } from "react-router-dom";

export default function Javascript() {
  return (
    <div className="routesLayout">
      <div className="sidebar">
        <h1>Javascript</h1>
        <Link to="1" className="routesBtn">
          Html 1
        </Link>
        <Link to="2" className="routesBtn">
          Html 2
        </Link>
        <Link to="3" className="routesBtn">
          Html 3
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
