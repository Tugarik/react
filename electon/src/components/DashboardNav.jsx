import "../styles/dashnav.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function DashboardNav() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    const handleLogOut = () => {
        navigate("/");
        setShow(false);
    };
    return (
        <div className="dashNav p-3">
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
                    <Button onClick={handleShow} className="loginbtn pe-3">
                        <img
                            className="user_icon pe-1"
                            src="./img/logout.svg"
                            alt="user_icon"
                        />
                        Log Out
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            <strong className="logOutModal ms-2">
                                <p className="qmark">?</p>
                                <p>Are you sure to sign out?</p>
                            </strong>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                type="submit"
                                onClick={handleLogOut}
                            >
                                Yes
                            </Button>
                            <Button
                                type="button"
                                variant="primary"
                                onClick={handleClose}
                            >
                                No
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
