import { useState } from "react";
import { DATA } from "../utils/data";
const items = ["Sale"];
export default function Popular() {
  const FilterPopular = ({ datas }) => {
    datas.map((data) => {
      if (!items.includes(data.category)) {
        items.push(data.category);
      }
    });
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => filterHandler(item)}
              className="popularBtn rounded-pill m-2"
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    );
  };

  const [filter, setFilter] = useState("Sale");
  const filterHandler = (item) => {
    setFilter(item);
  };

  const Filtered = ({ datas, filter }) => {
    const fdatas = [];
    filter == "Sale"
      ? datas.map((data) => {
          if (data.sale) {
            fdatas.push(data);
          }
        })
      : datas.map((data) => {
          if (data.category == filter) {
            fdatas.push(data);
          }
        });

    return (
      <div className="popularCarts d-flex flex-wrap justify-content-between">
        {fdatas.map((fdata, index) => (
          <div key={index} className="popularCart mx-auto mx-md-0 my-3">
            <div className="popilarCartImage">
              <img src={fdata.image} alt="popularImage" />
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h3>{fdata.title}</h3>
                <p>{fdata.model}</p>
                <p>
                  <strong>$ {fdata.price}</strong>
                </p>
              </div>
              <div className="cartBlue">
                <img src="./img/cart_blue.svg" alt="logo" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="Popular container-lg">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <div className="popularTitle mx-auto mx-md-0">Popular products</div>
        <FilterPopular datas={DATA} />
      </div>
      <Filtered datas={DATA} filter={filter} />
    </div>
  );
}
