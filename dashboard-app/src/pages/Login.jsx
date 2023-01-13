import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const urlLoginHandler = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      Login page
      <button onClick={urlLoginHandler}>Log In</button>
    </div>
  );
}
