import "../styles/addProductModal.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function EditProductModal({ items, itemId }) {
  const [show, setShow] = useState(false);
  const currentObj = items.filter((product) => product.id == itemId);
  const currentProduct = currentObj[0];
  console.log(itemId, currentProduct.spec);
  const currentFields = currentProduct.spec;

  const [specFields, setSpecFields] = useState(currentFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("updated");
    const specList = specFields.map((field) => {
      let obj = {};
      obj[field.specKey] = field.specValue;
      console.log(obj);
      return obj;
    });

    const newItem = {
      title: e.target.title.value,
      image: e.target.image.value,
      description: e.target.description.value,
      model: e.target.model.value,
      spec: specList,
      price: e.target.price.value,
      stock: e.target.stock.value,
      category: e.target.category.value,
      sale: e.target.sale.value,
      id: itemId,
    };
    console.log(newItem);

    try {
      axios
        .put(`http://localhost:5000/products/${itemId}`, newItem)
        .then(() => console.log("PUT done"));
    } catch (error) {
      console.log(error.message);
    }
    setShow(false);
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

  return (
    <>
      <button onClick={() => setShow(true)} className="btn addBtn ms-2 mb-2">
        Бараа засах
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <form onSubmit={handleSubmit}>
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
                defaultValue={currentProduct && currentProduct.category}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны зураг"
                name="image"
                defaultValue={currentProduct && currentProduct.image}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны нэр"
                name="title"
                defaultValue={currentProduct && currentProduct.title}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны загвар"
                name="model"
                defaultValue={currentProduct && currentProduct.model}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны үнэ (₮)"
                name="price"
                defaultValue={currentProduct && currentProduct.price}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Үлдэгдэл"
                name="stock"
                defaultValue={currentProduct && currentProduct.stock}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Хямдрал (%-иар)"
                name="sale"
                defaultValue={currentProduct && currentProduct.sale}
              />
              <textarea
                className="inputAddItem"
                type="text"
                placeholder="Description"
                name="description"
                defaultValue={currentProduct && currentProduct.description}
              />
              <p className="text-start mt-4">Үзүүлэлтүүд</p>

              {specFields.map((spec, index) => {
                return (
                  <div key={index} className="specBox d-flex flex-wrap">
                    <input
                      className="inputSpec mt-2"
                      type="text"
                      placeholder="Үзүүлэлт"
                      name="specKey"
                      defaultValue={Object.keys(spec) ? Object.keys(spec) : ""}
                      onChange={(e) => handleSpecChange(index, e)}
                    />
                    <input
                      className="inputSpec mt-2 ms-2"
                      type="text"
                      placeholder="Үзүүлэлтийн утга"
                      name="specValue"
                      defaultValue={Object.values(spec)}
                      onChange={(e) => handleSpecChange(index, e)}
                    />
                    <div
                      className="btn btn-danger removeBtn"
                      onClick={() => removeSpecField(index)}
                    >
                      -
                    </div>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="addBtns d-flex justify-content-between">
              <div
                // type="button"
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
