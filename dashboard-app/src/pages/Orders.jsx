import { addDataContext } from "../context/DataContext";
import "../styles/orders.css";
import OrdersSvg from "../svg/OrdersSvg";

export default function Orders() {
  const { items } = addDataContext();

  return (
    <div className="orders">
      <div className="d-flex">
        <OrdersSvg color="#003585" />
        <span className="productsTitle ms-2">Захиалгууд</span>
      </div>

      <hr />
      {items &&
        items.map((item, index) => {
          return (
            <div key={index}>
              <div>Title: {item.title}</div>
              <div>Name: {item.model}</div>
              <div>Price: {item.price}</div>
              <div>Quantity: {item.stock}</div>
              <div>Sale: {item.sale}% off</div>
              <div>Category: {item.category}</div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
