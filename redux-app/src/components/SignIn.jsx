import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    dispatch(login({ email: email }));
  };

  return (
    <div>
      <h2>Sign in</h2>
      <form>
        <input
          placeholder="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input placeholder="password" id="password" name="password" />
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
}
