import { useState } from "react";
import "../styles/login.css";

export default function Login({ loginData, registerData }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    loginData(userName, password);
  };

  const registerHandler = (e) => {
    e.preventDefault();
    registerData(userName, password);
  };

  return (
    <div>
      <main className="login">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            name="userName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="text"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Log In</button>
          <input type="button" value="Register" onClick={registerHandler} />
        </form>
      </main>
    </div>
  );
}
