import { useEffect } from "react";
import AddUserModal from "../component/AddUserModal";
import UserTable from "../component/UserTable";
import "../styles/users.css";
import UsersSvg from "../svg/UsersSvg";

export default function Users() {
  return (
    <div className="users">
      <div className="d-flex">
        <UsersSvg color="#003585" />
        <span className="productsTitle ms-2">Хэрэглэгчид</span>
      </div>
      <hr />
      <AddUserModal />
      <div className="d-flex justify-content-between py-4">
        <div>Dropdown</div>
        <div className="searchProduct">
          <img src="../img/ds_search_grey.svg" alt="" />
          <input type="text" placeholder="Хайх... " />
        </div>
      </div>
      <div>
        <UserTable />
      </div>
    </div>
  );
}
