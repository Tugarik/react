import Data from "./../data/Data";
import "../styles/popular.css";

export default function Popular() {
    return (
        <div className="popular container-lg">
            <div className="pop_buttons d-fllex">
                <div className="pop_title">Popular</div>
                <ul className="pop_buttons_set d-flex">
                    <li>Cameras</li>
                    <li>Laptops</li>
                </ul>
            </div>
        </div>
    );
}
