import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function EditTest() {
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit done");
  };
  return (
    <>
      <button onClick={() => setShow(true)}>edit test</button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <img src="../img/logo_blue.svg" alt="logo" />
            <strong>Electon</strong>
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="balbla1" />
          <input type="text" placeholder="balbla2" />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </>
  );
}
