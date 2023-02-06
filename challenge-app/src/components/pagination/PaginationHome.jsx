import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Pagination from "./Pagination";

export default function PaginationHome() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Pagination />
    </div>
  );
}
