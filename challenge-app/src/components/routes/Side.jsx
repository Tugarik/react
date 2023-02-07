import { Link, Outlet } from "react-router-dom";

export default function Side({ val }) {
  return (
    <div className="routesLayout">
      <div className="sidebar">
        <h1>React</h1>
        <Link to="1" className="routesBtn">
          {val} 1
        </Link>
        <Link to="2" className="routesBtn">
          {val} 2
        </Link>
        <Link to="3" className="routesBtn">
          {val} 3
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
