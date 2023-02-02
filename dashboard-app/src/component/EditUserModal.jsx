import "../styles/addProductModal.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function EditUserModal({ users, userId }) {
  const [show, setShow] = useState(false);
  const currentObj = users.filter((user) => user.id == userId);
  const currentUser = currentObj[0];
  const currentFields = currentUser.orders;

  const [specFields, setSpecFields] = useState(currentFields);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userName: e.target.userName.value,
      password: e.target.password.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      spec: specFields,
      email: e.target.email.value,
      phone: e.target.phone.value,
      id: userId,
    };

    console.log(newUser);
    setShow(false);

    try {
      axios
        .put(`http://localhost:5000/users/${userId}`, newUser)
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

  return (
    <>
      <button onClick={() => setShow(true)} className="btn addBtn">
        Хэрэглэгч засах
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
                placeholder="User name"
                name="userName"
                defaultValue={currentUser && currentUser.userName}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Password"
                name="password"
                defaultValue={currentUser && currentUser.password}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="First name"
                name="firstName"
                defaultValue={currentUser && currentUser.firstName}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Last name"
                name="lastName"
                defaultValue={currentUser && currentUser.lastName}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="E-mail"
                name="email"
                defaultValue={currentUser && currentUser.email}
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="Phone number"
                name="phone"
                defaultValue={currentUser && currentUser.phone}
              />

              <p className="text-start mt-4">Захиалгууд</p>

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
                + Захиалгууд нэмэх
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
