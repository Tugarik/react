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

export default function DashSide() {
  const { role } = useDataContext();
  const [current, setCurrent] = useState(localStorage.getItem("currentMenu"));
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
