import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const urlHomeHandler = () => {
    navigate("/");
  };

  const urlLoginHandler = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <button onClick={urlHomeHandler}>Home</button>
      <button onClick={urlLoginHandler}>Login</button>
      <Link/>
    </div>
  );
}
