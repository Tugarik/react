import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./userrow.css";

export default function AddUser({addNew}) {
  const [show, setShow] = useState(false);
  const [newName, setNewName] = useState('');
  const [newScore, setNewScore] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleName = (e) => {console.log(e.target.value); setNewName(e.target.value)};
  const handleScore = (e) => {console.log(e.target.value); setNewScore(e.target.value)};


  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
       + Add User
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <input
            id="modalName"
            type="text"
            placeholder="New User Name"
            onChange={handleName}
          />
          
          <input
            id="modalScore"
            type="text"
            placeholder="New User Score"
            onChange={handleScore}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=> addNew(newName, newScore)} variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
