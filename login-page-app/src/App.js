import "./App.css";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import { useState } from "react";

let users = [
  { name: "tuga", password: "123" },
  { name: "andy", password: "asd" },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [usersList, setUsersList] = useState(users);

  function loginHandler(userName, password) {
    console.log("user name: ", userName);
    console.log("password: ", password);
    let isMatch = false;
    usersList.map((user) => {
      if (userName === user.name && password === user.password) {
        setIsLoggedIn(true);
        setUser(userName);
        isMatch = true;
        return;
      }
    });
    if (!isMatch) {
      console.error("Password and user name are not match");
    }
  }

  function signupHandler(userName, password) {
    console.log("user name: ", userName);
    console.log("password: ", password);
    setUsersList([...users, { name: userName, password: password }]);
    console.log(usersList);
  }
  return (
    <div className="App">
      {isLoggedIn ? (
        <Profile setUser={user} setLogout={setIsLoggedIn} />
      ) : (
        <Welcome setLogin={loginHandler} setSignUp={signupHandler} />
      )}
    </div>
  );
}

export default App;
