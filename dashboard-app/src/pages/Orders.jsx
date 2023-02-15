import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
// import { useDataContext } from "../context/DataContext";
import { useAxios } from "../hooks/useAxios";
import { useFetch } from "../hooks/useFetch";
import "../styles/orders.css";
import OrdersSvg from "../svg/OrdersSvg";

export default function Orders() {
  // const { items, setItems } = useDataContext();
  const [items, setItems] = useState();

  // const { response, loading, error } = useAxios({
  //   method: "GET",
  //   url: "http://localhost:5000/products",
  // });

  const { response, loading, error } = useFetch(
    "http://localhost:5000/orders",
    {}
  );

  useEffect(() => {
    response && setItems(response);
  }, [response]);

  return (
    <div className="orders">
      <div className="d-flex">
        <OrdersSvg color="#003585" />
        <span className="productsTitle ms-2">Захиалгууд</span>
      </div>

      <hr />

      {loading ? (
        <div className="orderPanel">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          {error && <div>{error.message}</div>}
          {items &&
            items.map((order, index) => {
              return (
                <div key={index}>
                  <div>Order ID: {order.id}</div>
                  <div>Buyer ID: {order.userId}</div>
                  <div>Date: {order.date}</div>
                  <div>Items: {order.items[0].item}</div>
                  <div>Quantity: {order.items[0].count}</div>
                  <hr />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
