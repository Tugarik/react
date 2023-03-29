import { Spinner } from "react-bootstrap";
import "../styles/orders.css";
import OrdersSvg from "../svg/OrdersSvg";

export default function Orders() {
  return (
    <div className="orders">
      <div className="d-flex">
        <OrdersSvg color="#003585" />
        <span className="productsTitle ms-2">Захиалгууд</span>
      </div>

      <hr />

      <div className="orderPanel">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}
