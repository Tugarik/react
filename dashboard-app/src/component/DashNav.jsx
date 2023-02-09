import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addDataContext } from "../context/DataContext";

export default function DashNav() {
  const { role } = addDataContext();
  const navigate = useNavigate();
  const logOutHandle = () => {
    navigate("/");
    setShow(false);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Dash_Nav d-flex">
      <div className="left mb-2 mb-md-0 mx-auto mx-md-0 my-auto">
        <img src="../img/logo_blue.svg" alt="logo" />
        <span className="brandName">Electon</span>
      </div>
      <div className="middle mx-auto mx-md-0 my-auto">
        <InputGroup className="mb-2 mb-md-0">
          <Form.Control
            placeholder="Search any things"
            aria-label="Search any things"
            aria-describedby="basic-addon2"
            id="basic-input2"
          />
          <Button variant="" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="right mx-auto mx-md-0 my-auto">
        <span>Signed In as {role}!</span>
        <button className="whiteBtn" onClick={handleShow}>
          <img src="../img/log_out.svg" alt="logout" />
          <span> Гарах</span>
        </button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <div className="text-center p-3 ">
            <div className="qmark">?</div>
            <div>Та системээс гарахдаа итгэлтэй байна уу?</div>
          </div>
          <div className="modalBtns">
            <button className=" btn blueBtn" onClick={logOutHandle}>
              Тийм
            </button>
            <button className="btn greyBtn" onClick={handleClose}>
              Үгүй
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
