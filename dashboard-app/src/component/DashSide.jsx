import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

const adminMenu = [
  {
    name: "Хянах самбар",
    url: "panel",
    imageUrl: "../img/ds_dashboard.svg",
  },
  {
    name: "Бүтээгдэхүүнүүд",
    url: "products",
    imageUrl: "../img/ds_monitor.svg",
  },
  { name: "Хэрэглэгчид", url: "users", imageUrl: "../../../img/ds_users.svg" },
  { name: "Захиалгууд", url: "orders", imageUrl: "../../../img/ds_orders.svg" },
  {
    name: "Модератор",
    url: "moderator",
    imageUrl: "../img/ds_moderator.svg",
  },
  {
    name: "Тохиргоо",
    url: "settings",
    imageUrl: "../img/ds_settings.svg",
  },
];

const moderatorMenu = [
  {
    name: "Хянах самбар",
    url: "panel",
    imageUrl: "../../../img/ds_dashboard.svg",
  },
  {
    name: "Бүтээгдэхүүнүүд",
    url: "products",
    imageUrl: "../../../img/ds_monitor.svg",
  },
  { name: "Захиалгууд", url: "orders", imageUrl: "../../../img/ds_orders.svg" },
  { name: "Хэрэглэгчид", url: "users", imageUrl: "../../../img/ds_users.svg" },
];

export default function DashSide() {
  const { role } = useDataContext();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  let menus = [];

  const Layout = ({ role }) => {
    role == "admin" ? (menus = [...adminMenu]) : (menus = [...moderatorMenu]);

    return (
      <div className="d-flex flex-wrap">
        {menus &&
          menus.map((menu, index) =>
            current === index ? (
              <button
                key={index}
                className="roleBtn mb-3 mx-auto ps-3 roleBtn-active"
              >
                <img src={menu.imageUrl} alt="menulogo" />
                <span> {menu.name}</span>
              </button>
            ) : (
              <button
                key={index}
                className="roleBtn mb-3 mx-auto ps-3"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrent(index);
                  navigate(menu.url);
                }}
              >
                <img src={menu.imageUrl} alt="menulogo" />
                <span> {menu.name}</span>
              </button>
            )
          )}
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
