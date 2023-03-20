import "../styles/addProductModal.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import axios from "axios";

export default function AddUserModal() {
  const [show, setShow] = useState(false);

  const [specFields, setSpecFields] = useState([
    { specKey: "", specValue: "" },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemId = uuid().slice(0, 8);
    const specList = specFields.map((field) => {
      let obj = {};
      obj[field.specKey] = field.specValue;
      return obj;
    });

    const newUser = {
      userName: e.target.userName.value,
      passwordHash: e.target.password.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      orders: specList,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };
    console.log(newUser);
    setShow(false);

    try {
      axios
        .post("http://localhost:5000/user/test", newUser)
        .then(() => console.log("POST done"));
    } catch (error) {
      console.log(error.message);
    }
    location.reload();
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
      <button onClick={handleShow} className="btn addBtn">
        + Хэрэглэгч нэмэх
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
                placeholder="User name"
                name="userName"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Password"
                name="password"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="First name"
                name="firstName"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Last name"
                name="lastName"
              />
              <input
                className="inputAddItem"
                type="email"
                placeholder="email"
                name="email"
              />
              <input
                className="inputAddItem"
                type="phone"
                placeholder="phone"
                name="phone"
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
                      onChange={(e) => handleSpecChange(index, e)}
                    />
                    <input
                      className="inputSpec mt-2 ms-2"
                      type="text"
                      placeholder="Үзүүлэлтийн утга"
                      name="specValue"
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
