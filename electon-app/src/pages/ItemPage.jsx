import "../styles/ItemPage.css";
import ItemHeader from "../components/subComps/ItemHeader";
import { useParams } from "react-router-dom";
import { DATA } from "../utils/data";

export default function ItemPage() {
  const { itemId } = useParams();
  const item = DATA[DATA.findIndex((obj) => obj.id == itemId)];
  const Specs = ({ items }) => {
    return (
      <div className="ps-3">
        {items.spec.map((spec, index) => {
          return (
            <p key={index}>
              {Object.keys(spec)} : {Object.values(spec)}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="ItemPage">
      <ItemHeader />
      <div className="container-lg py-4">
        <div className="d-flex flex-wrap">
          <div className="itemImage mx-auto">
            <img src={item.image} alt="" />
          </div>
          <div className="itemText mx-auto">
            <p>
              <strong>{item.category}</strong>
            </p>
            <p>
              <strong>$ {item.price}</strong>
            </p>
            <p>{item.sale != 0 ? `Sale: ${item.sale}% off` : ""}</p>
            <p>Specs:</p>
            <Specs items={item} />

            <p>ItemId: {item.id}</p>
          </div>
        </div>
        <hr />
        <div className="pb-3">Description:</div>
        <div className="itemDescription">{item.description}</div>
        <hr />
      </div>
    </div>
  );
}
