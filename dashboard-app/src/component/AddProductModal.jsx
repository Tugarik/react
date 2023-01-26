import "../styles/addProductModal.css";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

export default function AddProductModal() {
  const [show, setShow] = useState(false);

  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [model, setModel] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [sale, setSale] = useState();
  const [specKey, setSpecKey] = useState();
  const [specValue, setSpecValue] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItem);
    specKeys.push(specKey);
    specValues.push(specValue);
    console.log(specKeys);
    console.log(specValues);
    setShow(false);
  };
  const spec = {};
  const specKeys = [];
  const specValues = [];
  spec[specKey] = specValue;
  const specArray = [spec];

  const newItem = {
    title: title,
    image: image,
    model: model,
    spec: specArray,
    price: price,
    stock: stock,
    category: category,
    sale: sale,
    id: "eb89f3b9",
  };
  let specItems = [1, 1];
  const addSpecField = () => {
    specItems.push(1);
    console.log(specItems);
  };
  const SpecField = () => {
    useEffect(() => {
      // console.log("SpecField generated");
      specItems.forEach((specItem, index) => {
        return (
          <div className="specBox" key={index}>
            <input
              className="inputAddItem mt-2"
              type="text"
              placeholder="Үзүүлэлт"
              id="specKey"
              onChange={(e) => {
                setSpecKey(e.target.value);
              }}
            />
            <input
              className="inputAddItem mt-2"
              type="text"
              placeholder="Үзүүлэлтийн утга"
              id="specValue"
              onChange={(e) => {
                setSpecValue(e.target.value);
              }}
            />
          </div>
        );
      });
    }, [specItems]);
  };

  return (
    <>
      <button onClick={handleShow} className="btn addBtn">
        + Бараа нэмэх
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <form action="" onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src="../img/logo_blue.svg" alt="logo" />
              <strong>Electon</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="inputsAddItem">
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны зураг"
                name="image"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны нэр"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны загвар"
                name="model"
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны үнэ (₮)"
                name="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />

              <input
                className="inputAddItem"
                type="text"
                placeholder="Үлдэгдэл"
                name="stock"
                onChange={(e) => {
                  setStock(e.target.value);
                }}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Хямдрал (%-иар)"
                name="sale"
                onChange={(e) => {
                  setSale(e.target.value);
                }}
              />
              <p className="text-start mt-4">Үзүүлэлтүүд</p>

              {specItems.map((specItem, index) => {
                return (
                  <div className="specBox" key={index}>
                    <input
                      className="inputAddItem mt-2"
                      type="text"
                      placeholder="Үзүүлэлт"
                      name="specKey"
                      onChange={(e) => {
                        setSpecKey(e.target.value);
                        let a = [];
                        a.push(e.target.value);
                        console.log("a = ", a);
                      }}
                    />
                    <input
                      className="inputAddItem mt-2"
                      type="text"
                      placeholder="Үзүүлэлтийн утга"
                      name="specValue"
                      onChange={(e) => {
                        setSpecValue(e.target.value);
                      }}
                    />
                  </div>
                );
              })}
              <SpecField />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="addBtns d-flex justify-content-between">
              <div
                type="button"
                className="btn btn-secondary mx-2"
                onClick={addSpecField}
              >
                + Үзүүлэлт нэмэх
              </div>
              <button type="submit" className="btn blueBtn">
                ХАДГАЛАХ
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
