import { useState } from "react";

export default function Welcome({ setLogin, setSignUp }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Login page</h1>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={() => setLogin(userName, password)}>Log In</button>
      <button onClick={() => setSignUp(userName, password)}>Sign Up</button>
    </div>
  );
}
