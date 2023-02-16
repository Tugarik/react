import "../../styles/LogInModal.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";
import axios from "axios";

export default function LogInModal() {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const forgotHandle = () => {
    alert("Bi ch bas martsan");
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(userName, password);
    setShow(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    registerHandler(userName, password);
    setShow(false);
  };

  async function loginHandler(userName, password) {
    try {
      const res = await axios.put(`http://localhost:5000/users/login`, {
        userName,
        password,
      });
      if (res.data.success) {
        setIsLoggedIn(true);
        setCurrentUser(userName);
        setPassword("");
      }
    } catch (error) {
      console.log(error.message);
      alert("Password and user name are wrong");
    }
  }

  async function registerHandler(userName, password) {
    try {
      const res = await axios.put(`http://localhost:5000/users/register`, {
        userName,
        password,
      });
      res.data.success && setIsLoggedIn(false);
      alert("Registration success!");
    } catch (error) {
      console.log(error.message);
      alert(`${userName} burtgeltei hereglegch bn`);
    }
  }

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
        <button onClick={() => setShow(true)} className="btn loginBtn">
          <img src="./img/user_white.svg" alt="" /> Log in
        </button>
      )}

      <Modal
        show={show}
        onHide={() => setShow(false)}
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
