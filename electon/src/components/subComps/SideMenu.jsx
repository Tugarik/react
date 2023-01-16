import "../../styles/sidemenu.css";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
    const navigate = useNavigate();

    const urlUsersHandler = () => {
        navigate("users");
    };

    const urlProductsHandler = () => {
        navigate("products");
    };

    return (
        <div className="sidemenu px-5">
            <h3>Side</h3>
            <button onClick={urlUsersHandler}>Users</button>
            <button onClick={urlProductsHandler}>Products</button>
        </div>
    );
}
