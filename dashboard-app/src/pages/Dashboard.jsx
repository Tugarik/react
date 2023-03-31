import DashNav from "../component/DashNav";
import DashPanel from "./DashPanel";
import Moderator from "./Moderator";
import Orders from "./Orders";
import Products from "./Products";
import Settings from "./Settings";
import Users from "./Users";
import { useDataContext } from "../context/DataContext";
import "../styles/dashboard.css";

const allMenus = [
  {
    name: "Хянах самбар",
    imageUrl: "../img/ds_dashboard.svg",
    component: <DashPanel />,
  },
  {
    name: "Бүтээгдэхүүнүүд",
    imageUrl: "../img/ds_monitor.svg",
    component: <Products />,
  },
  {
    name: "Хэрэглэгчид",
    imageUrl: "../../../img/ds_users.svg",
    component: <Users />,
  },
  {
    name: "Захиалгууд",
    imageUrl: "../../../img/ds_orders.svg",
    component: <Orders />,
  },
  {
    name: "Модератор",
    imageUrl: "../img/ds_moderator.svg",
    component: <Moderator />,
  },
  {
    name: "Тохиргоо",
    imageUrl: "../img/ds_settings.svg",
    component: <Settings />,
  },
];

export default function Dashboard() {
  const { role } = useDataContext();
  const { current, setCurrent } = useDataContext();
  function menuClickHandler(inp) {
    setCurrent(inp);
    localStorage.setItem("menu", inp);
  }

  let menus = [];

  role == "admin"
    ? (menus = [...allMenus])
    : (menus = [...allMenus.slice(0, 4)]);

  return (
    <div className="Dashboard">
      <DashNav />
      <div className="d-flex">
        <div className="Dash_Side text-center">
          <h4 className="py-4">Welcome, {role}!</h4>
          <div className="d-flex flex-wrap">
            {menus &&
              menus.map((menu, index) => (
                <button
                  key={index}
                  className={`roleBtn mb-3 mx-auto ps-3 ${
                    current == index && "roleBtn-active"
                  }`}
                  onClick={() => menuClickHandler(index)}
                >
                  <img src={menu.imageUrl} alt="menulogo" />
                  {menu.name}
                </button>
              ))}
          </div>
        </div>
        <div className="Dash_Layout">{allMenus[current].component}</div>
      </div>
    </div>
  );
}
