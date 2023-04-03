import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import Dashboard from "../pages/Dashboard";
import Moderator from "../pages/Moderator";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Settings from "../pages/Settings";
import Users from "../pages/Users";

const adminMenu = [
  {
    name: "Хянах самбар",
    url: "panel",
    imageUrl: "../img/ds_dashboard.svg",
    component: <Dashboard />,
  },
  {
    name: "Бүтээгдэхүүнүүд",
    url: "products",
    imageUrl: "../img/ds_monitor.svg",
    component: <Products />,
  },
  {
    name: "Хэрэглэгчид",
    url: "users",
    imageUrl: "../../../img/ds_users.svg",
    component: <Users />,
  },
  {
    name: "Захиалгууд",
    url: "orders",
    imageUrl: "../../../img/ds_orders.svg",
    component: <Orders />,
  },
  {
    name: "Модератор",
    url: "moderator",
    imageUrl: "../img/ds_moderator.svg",
    component: <Moderator />,
  },
  {
    name: "Тохиргоо",
    url: "settings",
    imageUrl: "../img/ds_settings.svg",
    component: <Settings />,
  },
];

export default function DashSide() {
  const { role } = useDataContext();
  const [current, setCurrent] = useState(
    localStorage.getItem("currentMenu") || 0
  );
  const navigate = useNavigate();
  let menus = [];

  const Layout = ({ role }) => {
    role == "admin"
      ? (menus = [...adminMenu])
      : (menus = [...adminMenu.slice(0, 4)]);

    return (
      <div className="d-flex flex-wrap">
        {menus &&
          menus.map((menu, index) => (
            <button
              key={index}
              className={`roleBtn mb-3 mx-auto ps-3 ${
                current == index && "roleBtn-active"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setCurrent(index);
                localStorage.setItem("currentMenu", index);
                navigate(menu.url);
              }}
            >
              <img src={menu.imageUrl} alt="menulogo" />
              <span> {menu.name}</span>
            </button>
          ))}
      </div>
    );
  };

  return (
    <div className="Dash_Side text-center">
      <h4 className="py-4">Welcome, {role}!</h4>
      <Layout role={role} />
    </div>
  );
}
