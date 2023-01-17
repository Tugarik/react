import { Outlet } from "react-router-dom";
import Dash_Nav from "../components/Dash_Nav";
import Dash_Side from "../components/Dash_Side";
import "../styles/Dashboard.css";

export default function Dashboard({ role }) {
  return (
    <div className="Dashboard">
      <Dash_Nav role={role} />
      <div className="d-flex">
        <Dash_Side role={role} />
        <Outlet />
      </div>
    </div>
  );
}
