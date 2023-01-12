import { useState } from "react";
import "../styles/login.css";

export default function Login({ loginData, registerData }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setUserName(e.target.userName.value);
    setPassword(e.target.password.value);
  };

  return (
    <div>
      <main className="login">
        <form action="" onSubmit={submitHandler}>
          <input type="text" name="userName" />
          <input type="text" name="password" />
          <button type="submit" onClick={() => loginData(userName, password)}>
            Log In
          </button>
          <input
            type="button"
            value="Register"
            onClick={() => registerData(userName, password)}
          />
        </form>
      </main>
    </div>
  );
}
