import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import SideMenu from "../components/subComps/SideMenu";

export default function Dashboard() {
    return (
        <div className="dashboard container-lg">
            <DashboardNav />
            <div className="d-flex">
                <SideMenu />
                <Outlet />
            </div>
        </div>
    );
}
