import "../styles/orders.css";

export default function Orders({ items }) {
  return (
    <div className="orders">
      <div>Orders</div>
      <hr />
      {items &&
        items.map((item, index) => {
          return (
            <div key={index}>
              <div>Name: {item.name}</div>
              <div>Price: {item.price}</div>
              <div>Quantity: {item.stock}</div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
