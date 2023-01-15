import SideMenu from "../component/SideMenu";
import "../styles/dashboard.css";
import { Outlet, Route, Routes } from "react-router-dom";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <SideMenu />
      <Outlet />
    </div>
  );
}
