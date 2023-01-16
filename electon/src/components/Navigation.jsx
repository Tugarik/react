import "../styles/navigation.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Navigation() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    const handleSubmit = () => {
        navigate("/dashboard");
        setShow(false);
    };

    const handleSignUp = () => {
        setShow(false);
    };
    return (
        <div className="navigation p-3">
            <div className=" container d-flex flex-wrap justify-content-sm-between justify-content-center text-center">
                <div
                    onClick={() => navigate("/")}
                    className="left d-flex flex-wrap text-white align-items-center justify-content-center justify-content-md-start"
                >
                    <img
                        className="logo"
                        src="./img/logo_white.svg"
                        alt="logo"
                    />
                    <span className="brandName ms-2">Electon</span>
                </div>
                <div className="middle d-flex ms-md-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search any things"
                        aria-label="Search any things"
                        aria-describedby="button-navsearch"
                    />
                    <Button className="btn" type="button" id="button-navsearch">
                        Search
                    </Button>
                </div>
                <div className="right d-flex align-items-center justify-content-end ms-auto mt-3">
                    <Button
                        onClick={handleShow}
                        className="loginbtn pe-3 btn btn-outline-primary"
                    >
                        <img
                            className="user_icon pe-1"
                            src="./img/user.svg"
                            alt="user_icon"
                        />
                        Sign in
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Form onSubmit={handleSubmit}>
                            <Modal.Header closeButton>
                                <div className="left d-flex flex-wrap text-white align-items-center justify-content-center justify-content-md-start">
                                    <img
                                        className="logo"
                                        src="./img/logo_blue.svg"
                                        alt="logo"
                                    />
                                    <strong className="brandNameModal ms-2">
                                        Electon
                                    </strong>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">
                                        <img
                                            className="modal_user_icon pe-1"
                                            src="./img/u_user.svg"
                                            alt="user_icon"
                                        />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="E-mail or phone number"
                                        aria-label="userName"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon2">
                                        <img
                                            className="modal_user_icon pe-1"
                                            src="./img/fi_unlock.svg"
                                            alt="user_icon"
                                        />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Password"
                                        aria-label="password"
                                        aria-describedby="basic-addon2"
                                    />
                                </InputGroup>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" type="submit">
                                    Sign In
                                </Button>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    onClick={handleSignUp}
                                >
                                    Sign Up
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                    <img
                        className="cart pe-3"
                        src="./img/cart.svg"
                        alt="cart"
                    />
                    <div className="counter">0</div>
                </div>
            </div>
        </div>
    );
}
