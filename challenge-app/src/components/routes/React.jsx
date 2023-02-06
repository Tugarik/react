import { Link, Outlet } from "react-router-dom";

export default function React() {
  return (
    <div className="routesLayout">
      <div className="sidebar">
        <h1>React</h1>
        <Link to="1" className="routesBtn">
          React 1
        </Link>
        <Link to="2" className="routesBtn">
          React 2
        </Link>
        <Link to="3" className="routesBtn">
          React 3
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
