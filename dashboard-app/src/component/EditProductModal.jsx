import "../styles/addProductModal.css";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function EditProductModal({ items, itemId }) {
  const [show, setShow] = useState(false);
  const [cats, setCats] = useState();
  const [brands, setBrands] = useState();
  const currentObj = items.filter((product) => product._id == itemId);
  const currentProduct = currentObj[0];
  const currentFields = currentProduct.spec;

  const [specFields, setSpecFields] = useState(currentFields);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/categories`)
        .then((res) => setCats(res.data));
    } catch (error) {
      console.log(error.message);
    }
  }, [setCats]);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/brands`)
        .then((res) => setBrands(res.data));
    } catch (error) {
      console.log(error.message);
    }
  }, [setBrands]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const specList = specFields.map((field) => {
      let obj = {};
      obj[field.specKey] = field.specValue;
      return obj;
    });
    console.log(specList);
    const newItem = {
      name: e.target.title.value,
      image: e.target.image.value,
      description: e.target.description.value,
      spec: specFields,
      brand: brandId,
      category: categoryId,
      price: e.target.price.value,
      stock: e.target.stock.value,
      sale: e.target.sale.value,

      // title: e.target.title.value,
      // image: e.target.image.value,
      // description: e.target.description.value,
      // model: e.target.model.value,
      // spec: specFields,
      // price: e.target.price.value,
      // stock: e.target.stock.value,
      // category: e.target.category.value,
      // sale: e.target.sale.value,
      // id: itemId,
    };
    const newProduct = new FormData();
    newProduct.append("data", JSON.stringify(newItem));
    newProduct.append("file", image);

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
    console.log(specFields);
  };

  const removeSpecField = (index) => {
    let data = [...specFields];
    data.splice(index, 1);
    setSpecFields(data);
  };

  const handleSpecChange = (index, e) => {
    let data = [...specFields];
    console.log(specFields);
    console.log(data);
    data[index][e.target.name] = e.target.value;
    setSpecFields(data);
  };
  const fileHandler = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <>
      <button onClick={() => setShow(true)} className="btn addBtn">
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
              <div className="inputSelect d-flex justify-content-between">
                <label>Select a category:</label>
                <select className="inputAddItem" name="category" id="category">
                  {cats &&
                    cats.map((cat, index) => (
                      <option key={index} id={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="inputSelect d-flex justify-content-between">
                <label>Select a brand:</label>
                <select className="inputAddItem" name="brand">
                  {brands &&
                    brands.map((brand, index) => (
                      <option key={index} id={brand._id}>
                        {brand.name}
                      </option>
                    ))}
                </select>
              </div>

              {/* defaultValue={currentProduct && currentProduct.category.name}
              defaultValue={currentProduct && currentProduct.brand.name} */}
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны нэр"
                name="title"
                defaultValue={currentProduct && currentProduct.name}
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
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны зураг"
                name="image"
                defaultValue={currentProduct && currentProduct.image}
                onChange={fileHandler}
              />
              <input
                className="inputAddItem"
                type="file"
                placeholder="Барааны зураг add"
                name="imageAdd"
                onChange={fileHandler}
              />

              <p className="text-start mt-4">Үзүүлэлтүүд</p>

              {specFields &&
                specFields.map((spec, index) => {
                  return (
                    <div key={index} className="specBox d-flex flex-wrap">
                      <input
                        className="inputSpec mt-2"
                        type="text"
                        placeholder="Үзүүлэлт"
                        name="specKey"
                        defaultValue={
                          Object.keys(spec) ? Object.keys(spec) : ""
                        }
                        onChange={(e) => handleSpecChange(index, e)}
                      />
                      <input
                        className="inputSpec mt-2 ms-2"
                        type="text"
                        placeholder="Үзүүлэлтийн утга"
                        name="specValue"
                        defaultValue={
                          Object.values(spec) ? Object.values(spec) : ""
                        }
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
