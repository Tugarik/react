import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { MENUS } from "../src/utils/data";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Poduct";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { users } from "../src/utils/data";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usersList, setUsersList] = useState(users);
  const [currentUser, setCurrentUser] = useState("");

  const loginHandler = (userName, password) => {
    let isMatch = false;
    usersList.map((user) => {
      if (userName === user.name && password === user.password) {
        setIsLoggedIn(true);
        setCurrentUser(userName);
        isMatch = true;
        console.log("logged user name: ", userName);
        console.log("logged password: ", password);
        return;
      }
    });
    if (!isMatch) {
      console.error("Password and user name are not match");
    }
  };

  const registerHandler = (userName, password) => {
    console.log("user name to reg: ", userName);
    console.log("password to reg: ", password);
    setUsersList([...usersList, { name: userName, password: password }]);
    console.log("New user registered!");
    console.log(usersList);
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>Commercial Page</h1>
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />
        <Route
          path={MENUS[2].url}
          element={
            isLoggedIn ? (
              <Product setUser={currentUser} setLogout={setIsLoggedIn} />
            ) : (
              <Login loginData={loginHandler} registerData={registerHandler} />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
