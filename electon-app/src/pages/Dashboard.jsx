import { Outlet } from "react-router-dom";
import Dash_Nav from "../components/Dash_Nav";
import Dash_Side from "../components/Dash_Side";
import '../styles/Dashboard.css'

export default function Dashboard() {
    return <div className="Dashboard">
        <Dash_Nav/>
        <div className="d-flex">
            <Dash_Side/>
            <Outlet/>
        </div>
    </div>
}