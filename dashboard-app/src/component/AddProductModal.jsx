import "../styles/addProductModal.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { json } from "react-router-dom";

export default function AddProductModal() {
  const [show, setShow] = useState(false);

  const [specFields, setSpecFields] = useState([
    { specKey: "", specValue: "" },
  ]);

  const [image, setImage] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const specList = specFields.map((field) => {
      let obj = {};
      obj[field.specKey] = field.specValue;
      return obj;
    });

    const newItem = {
      name: e.target.title.value,
      image: "",
      description: e.target.description.value,
      spec: specList,
      brand: e.target.model.value,
      category: e.target.category.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      sale: e.target.sale.value,
    };

    const newProduct = new FormData();
    newProduct.append("data", JSON.stringify(newItem));
    newProduct.append("file", image);
    

    // const newItem = {
    //   title: e.target.title.value,
    //   image: e.target.image.value,
    //   description: e.target.description.value,
    //   model: e.target.model.value,
    //   spec: specList,
    //   price: e.target.price.value,
    //   stock: e.target.stock.value,
    //   category: e.target.category.value,
    //   sale: e.target.sale.value,
    //   id: itemId,
    // };
    console.log(newProduct);
    setShow(false);

    try {
      axios
        .post("http://localhost:5000/product/add", newProduct)
        .then((req, res) => console.log("POST done ", res));
    } catch (error) {
      console.log(error.message);
    }
    // location.reload();
  };

  const addSpecField = (e) => {
    let newfield = { specKey: "", specValue: "" };
    setSpecFields([...specFields, newfield]);
  };

  const removeSpecField = (index) => {
    let data = [...specFields];
    data.splice(index, 1);
    setSpecFields(data);
  };

  const handleSpecChange = (index, e) => {
    let data = [...specFields];
    data[index][e.target.name] = e.target.value;
    setSpecFields(data);
  };

  const fileHandler = (e) => {
    setImage(e.target.files[0]);
 
  };

  return (
    <>
      <button onClick={handleShow} className="btn addBtn">
        + Бүтээгдэхүүн нэмэх
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
                placeholder="Category"
                name="category"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Brand"
                name="model"
              />

              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны нэр"
                name="title"
              />

              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны үнэ (₮)"
                name="price"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Үлдэгдэл"
                name="stock"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Хямдрал (%-иар)"
                name="sale"
              />
              <textarea
                className="inputAddItem"
                type="text"
                placeholder="Description"
                name="description"
              />
              <input
                className="inputAddItem"
                type="file"
                placeholder="Барааны зураг"
                name="image"
                onChange={fileHandler}
              />
              {/* <button onClick={uploadHandler}>Upload</button> */}
              <p className="text-start mt-4">Үзүүлэлтүүд</p>

              {specFields.map((spec, index) => {
                return (
                  <div key={index} className="specBox d-flex flex-wrap">
                    <input
                      className="inputSpec mt-2"
                      type="text"
                      placeholder="Үзүүлэлт"
                      name="specKey"
                      // value={spec.key}
                      onChange={(e) => handleSpecChange(index, e)}
                    />
                    <input
                      className="inputSpec mt-2 ms-2"
                      type="text"
                      placeholder="Үзүүлэлтийн утга"
                      name="specValue"
                      // value={spec.value}
                      onChange={(e) => handleSpecChange(index, e)}
                    />
                    <button
                      className="btn btn-danger removeBtn"
                      onClick={() => removeSpecField(index)}
                    >
                      -
                    </button>
                  </div>
                );
              })}
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
