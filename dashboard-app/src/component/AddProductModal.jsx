import "../styles/addProductModal.css";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {v4 as uuid} from "uuid";
import axios from "axios";

export default function AddProductModal() {
  const [show, setShow] = useState(false);
  const [inputList, setInputList] = useState([]);

  const [specKey, setSpecKey] = useState([]);
  const [specValue, setSpecValue] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.specKey.value);
    const itemId = uuid().slice(0,8);
    
    const spec = {};
    spec[e.target.specKey.value] = e.target.specValue.value;
    const specArray = [spec];
    
   
    const newItem = {
      title: e.target.title.value,
      image: e.target.image.value,
      description: e.target.description.value,
      model: e.target.model.value,
      spec: specArray,
      price: e.target.price.value,
      stock: e.target.stock.value,
      category: e.target.category.value,
      sale: e.target.sale.value,
      id: itemId,
    };

    setShow(false);

    try {
      axios.post("http://localhost:5000/products", newItem)
      .then(()=>console.log("POST done"));
    
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const Input = ({index}) => {
    return (
      <div id={index} className="specBox d-flex flex-wrap">
          <input
            className="inputSpec mt-2"
            type="text"
            placeholder="Үзүүлэлт"
            name="specKey"
            onChange={(e) => setSpecKey(e.target.value)}
          />
          <input
            className="inputSpec mt-2 ms-2"
            type="text"
            placeholder="Үзүүлэлтийн утга"
            name="specValue"
            onChange={(e) => 
              setSpecValue(e.target.value)}
          />
          
          
      </div>
    )
  };

  const addSpecField = (e) => {
    setInputList(inputList.concat(<Input key = {inputList.length} index={inputList.length} />));
  };

  const removeElement = (id) => {
    const newList = inputList.filter(
      (list) => list.id !== id
    );
    setInputList(newList);
  };

  const delSpecField = (e) => {
    inputList.pop();
    setInputList(inputList);
    console.log('deleted');
  }
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
                placeholder="Category"
                name="category"
                onChange={(e) => {
                  
                }}
              />
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
              <textarea
                className="inputAddItem"
                type="text"
                placeholder="Description"
                name="description"
                onChange={()=>{setDescription(e.target.value)}}
              />
              <p className="text-start mt-4">Үзүүлэлтүүд</p>

              {inputList}
              
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
              <div
                type="button"
                className="btn btn-secondary mx-2"
                onClick={delSpecField}
              >
                - Үзүүлэлт hasah
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
