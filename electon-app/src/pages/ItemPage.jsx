import "../styles/ItemPage.css";
import ItemHeader from "../components/subComps/ItemHeader";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

export default function ItemPage() {
  const { products } = useDataContext();
  const { itemId } = useParams();
  const item = products[products.findIndex((obj) => obj.id == itemId)];

  const Specs = ({ currentItem }) => {
    return (
      <div className="ps-3">
        {currentItem &&
          currentItem.spec.map((singleSpec, index) => (
            <p key={index}>
              {Object.keys(singleSpec)} : {Object.values(singleSpec)}
            </p>
          ))}
      </div>
    );
  };

  return (
    <div className="ItemPage">
      <ItemHeader />
      <div className="container-lg py-4">
        <div className="d-flex flex-wrap">
          <div className="itemImage mx-auto">
            <img src={item && item.image} alt="" />
          </div>
          <div className="itemText mx-auto">
            <p>
              <strong>{item && item.category}</strong>
            </p>
            <p>
              <strong>$ {item && item.price}</strong>
            </p>
            <p>
              {item && item.sale != 0 ? `Sale: ${item && item.sale}% off` : ""}
            </p>
            <p>Quantity: {item && item.stock}</p>
            <p>Specs:</p>
            <Specs currentItem={item} />
            <p>ItemId: {item && item.id}</p>
          </div>
        </div>
        <hr />
        <div className="pb-3">Description:</div>
        <div className="itemDescription">{item && item.description}</div>
        <hr />
      </div>
    </div>
  );
}
