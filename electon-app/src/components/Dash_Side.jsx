import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const adminMenu = [
  { name: "Хянах самбар", url: "panel" },
  { name: "Бүтээгдэхүүнүүд", url: "products" },
  { name: "Захиалгууд", url: "orders" },
  { name: "Хэрэглэгчид", url: "users" },
  { name: "Модератор", url: "moderators" },
  { name: "Тохиргоо", url: "settings" },
];

const moderatorMenu = [
  { name: "Хянах самбар", url: "panel" },
  { name: "Бүтээгдэхүүнүүд", url: "products" },
  { name: "Захиалгууд", url: "orders" },
  { name: "Хэрэглэгчид", url: "users" },
];

export default function Dash_Side({ role }) {
  // const AdminLayout = () => {
  //   return (
  //     <div>
  //       {adminMenu.map((menu, index) => (
  //         <div key={index}>
  //           <button onClick={() => navigate(menu.url)}>{menu.name}</button>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  // const ModeratorLayout = () => {
  //   return (
  //     <div>
  //       {moderatorMenu.map((menu, index) => (
  //         <div key={index}>
  //           <button onClick={() => navigate(menu.url)}>{menu.name}</button>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  const navigate = useNavigate();
  let menus = [];
  const Layout = ({ role }) => {
    role == "admin" ? (menus = [...adminMenu]) : (menus = [...moderatorMenu]);
    console.log(role);
    return (
      <div>
        {menus.map((menu, index) => (
          <div key={index}>
            <button
              className=" mb-3 roleBtn"
              onClick={(e) => {
                e.preventDefault();
                navigate(menu.url);
              }}
            >
              {menu.name}
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="Dash_Side">
      Dash_Side
      <p>Welcome, {role}!</p>
      <Layout role={role} />
    </div>
  );
}
