import "../../styles/LogInModal.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { USERS } from "../../utils/data";

export default function LogInModal({ loginRole }) {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usersList, setUsersList] = useState(USERS);
  const [currentUser, setCurrentUser] = useState("");

  const navigate = useNavigate();
  const logOutHandle = () => {
    navigate("/");
    setShow(false);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(userName, password);
    console.log(userName, password);
    setShow(false);
  };

  const loginHandler = (userName, password) => {
    let isMatch = false;
    usersList.map((user) => {
      if (userName === user.name && password === user.password) {
        if (user.role === "user") {
          setIsLoggedIn(true);
          setCurrentUser(userName);
          loginRole(user.role);
          isMatch = true;
          console.log("logged user name: ", userName);
          console.log("logged password: ", password);
          navigate("/");
          return;
        } else {
          setIsLoggedIn(true);
          setCurrentUser(userName);
          loginRole(user.role);
          isMatch = true;
          console.log("logged user name: ", userName);
          console.log("logged password: ", password);
          navigate("/dashboard");
          return;
        }
      }
    });
    if (!isMatch) {
      alert("Password and user name are not match");
    }
  };

  const registerHandler = (userName, password) => {
    console.log("user name to reg: ", userName);
    console.log("password to reg: ", password);
    setUsersList([
      ...usersList,
      { name: userName, password: password, role: "user" },
    ]);
    console.log("New user registered!");
    console.log(usersList);
    setIsLoggedIn(false);
  };

  return (
    <>
      <button onClick={handleShow} className="btn loginBtn">
        <img src="./img/user_white.svg" alt="" /> Log in
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

              <Link
                to={"/dashboard"}
                className="passquestion"
                onClick={logOutHandle}
              >
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
              <button className="btn regBtn" onClick={registerHandler}>
                Бүртгүүлэх
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}