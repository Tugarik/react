export default function Profile({ setUser, setLogout }) {
  console.log(setUser, " is logged in.");
  function logoutHandler() {
    setLogout(false);
  }
  return (
    <div>
      <h1>Profile Page</h1>
      <h2> Welcome back, {setUser}!</h2>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  );
}
