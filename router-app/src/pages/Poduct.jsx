import "../styles/product.css";

export default function Product({ setUser, setLogout }) {
  console.log(setUser, " is logged in.");
  function logoutHandler() {
    setLogout(false);
  }
  return (
    <div>
      <h1>Product Page</h1>
      <h2> Welcome back, {setUser}!</h2>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  );
}
