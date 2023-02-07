import { Outlet } from "react-router-dom";
import RoutesNavbar from "./RoutesNavbar";
import RoutesFooter from "./RoutesFooter";
import "./routes.css";

export default function RoutesHome({ getSection }) {
  return (
    <div>
      <RoutesNavbar getSection={getSection} />
      <Outlet />
      <RoutesFooter />
    </div>
  );
}
