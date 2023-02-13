import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

const items = ["Sale"];

export default function Popular() {
  const { products, setProducts } = useDataContext();
  const { basketItems, setBasketItems } = useDataContext();
  const [filter, setFilter] = useState("Sale");

  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/products")
        .then((res) => setProducts(res.data));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const FilterButtons = ({ datas }) => {
    datas &&
      datas.forEach((data) => {
        if (!items.includes(data.category)) {
          items.push(data.category);
        }
      });
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {items &&
          items.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setFilter(item)}
                className="popularBtn rounded-pill m-2"
              >
                {item}
              </button>
            </div>
          ))}
      </div>
    );
  };

  const Filtered = ({ datas, filter }) => {
    const fdatas = [];
    filter == "Sale"
      ? datas &&
        datas.map((data) => {
          if (data.sale) {
            fdatas.push(data);
          }
        })
      : datas.map((data) => {
          if (data.category == filter) {
            fdatas.push(data);
          }
        });

    const addToCartHandler = (id) => {
      let basket = [];
      let elIds = [];
      let isFinished = false;
      console.log("addId: ", id);

      if (localStorage.getItem("basket")) {
        basket = JSON.parse(localStorage.getItem("basket"));
        basket &&
          basket.forEach((el) => {
            elIds.push(el.id);
          });

        if (elIds.includes(id)) {
          basket &&
            basket.forEach((el) => {
              if (el.id == id && !isFinished) {
                el.count++;
                isFinished = true;
              }
            });
        } else {
          basket.push({ id, count: 1 });
        }
      } else {
        basket.push({ id, count: 1 });
      }

      localStorage.setItem("basket", JSON.stringify(basket));
    };

    return (
      <div className="popularCarts d-flex flex-wrap justify-content-center">
        {fdatas &&
          fdatas.map((fdata, index) => (
            <div key={index} className="popularCart mx-auto mx-md-3 my-3">
              <div className="popularCartImage">
                <img
                  className="z-index-2"
                  src={fdata.image}
                  alt="popularImage"
                  onClick={() => navigate("/item/" + fdata.id)}
                />
                <div
                  className={
                    fdata.sale > 0 ? "saleSign" : "saleSign bg-transparent"
                  }
                >
                  {fdata.sale > 0 ? `Sale ${fdata.sale}% off` : null}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <h3>{fdata.title}</h3>
                  <p>{fdata.model}</p>
                  <p>
                    <strong>$ {fdata.price}</strong>
                  </p>
                </div>
                <div
                  className="cartBlue"
                  onClick={() => addToCartHandler(fdata.id)}
                >
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
        <FilterButtons datas={products} />
      </div>
      <Filtered datas={products} filter={filter} />
    </div>
  );
}
