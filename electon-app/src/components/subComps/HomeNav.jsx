import { useState } from "react";
import { useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDataContext } from "../../context/DataContext";
import LogInModal from "./LogInModal";

export default function HomeNav() {
  const { basketItems, setBasketItems } = useDataContext();
  let count = 0;
  useEffect(() => {
    const loadBasket = JSON.parse(localStorage.getItem("basket"));
    loadBasket && setBasketItems(loadBasket);

    loadBasket &&
      loadBasket.forEach((el) => {
        count += el.count;
        console.log(el.count);
      });
    console.log(count);
  }, []);

  return (
    <div className="HomeNav d-flex">
      <div className="left mb-2 mb-md-0 mx-auto mx-md-0 my-auto">
        <img src="../img/logo_white.svg" alt="logo" />
        <span className="brandName">Electon</span>
      </div>
      <div className="middle mx-auto mx-md-0 my-auto order-3 order-md-2">
        <InputGroup className="searchInput mb-2 mb-md-0">
          <Form.Control
            placeholder="Search any things"
            aria-label="Search any things"
            aria-describedby="basic-addon1"
            id="basic-input1"
          />
          <Button variant="outline-light" id="button-addon1">
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="right mx-auto mx-md-0 my-auto order-2 order-md-3">
        <LogInModal />
        <button className="btn">
          <img src="./img/cart_white.svg" alt="" />
          <span className="shoppingCart">
            {basketItems ? basketItems.length : 0}
          </span>
        </button>
      </div>
    </div>
  );
}
