import "../styles/addProductModal.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { USERS } from "../utils/data";

export default function AddProductModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(userName, password);
    console.log(userName, password);
    setShow(false);
  };

  // validation

  return (
    <>
      <button onClick={handleShow} className="btn addBtn">
        <img src="./img/user_white.svg" alt="" /> + Бараа нэмэх
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
                placeholder="Барааны нэр"
                name="title"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Барааны үнэ (₮)"
                name="price"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <input
                className="inputAddItem"
                type="text"
                placeholder="Үлдэгдэл"
                name="stock"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Хямдрал (%-иар)"
                name="sale"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <p className="text-start mt-4">Үзүүлэлтүүд</p>
              <input
                className="inputAddItem"
                type="text"
                placeholder="Багтаамж"
                name="sale"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Цахилгаан зарцуулалт"
                name="sale"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="addBtns d-flex justify-content-between">
              <div type="button" className="btn btn-secondary mx-2">
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
