import "../../styles/LogInModal.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { USERS } from "../../utils/data";
import { useDataContext } from "../../context/DataContext";
import axios from "axios";

export default function LogInModal() {
  const { role, setRole } = useDataContext();
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usersList, setUsersList] = useState(USERS);
  const [currentUser, setCurrentUser] = useState(role);

  const forgotHandle = () => {
    alert("Bi ch bas martsan");
    setShow(false);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(userName, password);
    setShow(false);
  };

  const loginHandler = (userName, password) => {
    try {
      axios
        .put(`http://localhost:5000/users/login`, { userName, password })
        .then((res) => {
          if (res.data.success) {
            setIsLoggedIn(true);
            setCurrentUser(userName);
            setRole("user");
            console.log("logged user name: ", userName);
            console.log("logged password: ", password);
          } else {
            alert("Password and user name are wrong");
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRegister = () => {
    registerHandler(userName, password);
    setShow(false);
    alert("Registration success!");
  };

  const registerHandler = (userName, password) => {
    try {
      axios
        .put(`http://localhost:5000/users/register`, { userName, password })
        .then((res) => {
          if (res.data.success) {
            console.log("user name to reg: ", userName);
            console.log("password to reg: ", password);
            setIsLoggedIn(false);
          } else {
            alert(`${userName} burtgeltei hereglegch bn`);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  // const registerHandler = (userName, password) => {
  //   console.log("user name to reg: ", userName);
  //   console.log("password to reg: ", password);
  //   setUsersList([
  //     ...usersList,
  //     { name: userName, password: password, role: "user" },
  //   ]);
  //   console.log("New user registered!");
  //   setIsLoggedIn(false);
  // };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="btn loginBtn">
          <img src="./img/user_white.svg" alt="" />
          {currentUser}, Log out
        </button>
      ) : (
        <button onClick={handleShow} className="btn loginBtn">
          <img src="./img/user_white.svg" alt="" /> Log in
        </button>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <form action="" onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src="./img/logo_blue.svg" alt="logo" />
              <strong>Electon</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modalInputs">
              <div className="inputContainer">
                <div className="inputImg">@</div>
                <input
                  className="inputMail"
                  type="text"
                  placeholder="И-мэйл эсвэл Утасны дугаар"
                  name="userName"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div className="inputContainer">
                <div className="inputImg">$</div>
                <input
                  className="inputPass"
                  type="password"
                  placeholder="Нууц үг"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <Link to={"/"} className="passquestion" onClick={forgotHandle}>
                Нууц үгээ мартсан уу?
              </Link>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="logInBtns">
              <button type="submit" className=" btn loginBtn">
                Нэвтрэх
              </button>
              <p className="hr-lines">эсвэл</p>
              <button
                type="button"
                className="btn regBtn"
                onClick={handleRegister}
              >
                Бүртгүүлэх
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
