import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { MENUS } from "../src/utils/data";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { users } from "../src/utils/data";
import { useState } from "react";
import Product from "./pages/Poduct";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usersList, setUsersList] = useState(users);
  const [user, setUser] = useState("");

  const loginHandler = (userName, password) => {
    console.log("log user name: ", userName);
    console.log("log password: ", password);
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
  };

  const registerHandler = (userName, password) => {
    console.log("reg user name: ", userName);
    console.log("reg password: ", password);
    setUsersList([...users, { name: userName, password: password }]);
    console.log(usersList);
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
              <Product setUser={user} setLogout={setIsLoggedIn} />
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
