import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Dash_Nav({ role }) {
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
      <div className="left">Left</div>
      <div className="middle">Middle</div>
      <div className="right">
        <span>Signed In as {role}!</span>
        <button className="whiteBtn" onClick={handleShow}>
          <img src="./img/log_out.svg" alt="logout" />
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
