import SideMenu from "../component/SideMenu";
import Products from "./Products";
import "../styles/dashboard.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Users from "./Users";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <SideMenu />
      <Outlet />
    </div>
  );
}
