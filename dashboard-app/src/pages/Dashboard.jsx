import { Outlet } from "react-router-dom";
import DashNav from "../component/DashNav";
import DashSide from "../component/DashSide";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <DashNav />
      <div className="d-flex">
        <DashSide />
        <Outlet />
      </div>
    </div>
  );
}
