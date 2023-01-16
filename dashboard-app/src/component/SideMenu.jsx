import "../styles/sidemenu.css";
import { Link, useNavigate } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();

  const urlUsersHandler = () => {
    navigate("users");
  };

  const urlProductsHandler = () => {
    navigate("products");
  };

  return (
    <div className="sidemenu">
      <h3>Side</h3>
      <button onClick={urlUsersHandler}>Users</button>
      <button onClick={urlProductsHandler}>Products</button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
}
