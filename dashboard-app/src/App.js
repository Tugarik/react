import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashPanel from "./pages/DashPanel";
import Home from "./pages/Home";
import Moderator from "./pages/Moderator";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

import "./styles/app.css";
const RoleContext = createContext(null);
export function useRoleContext() {
  return useContext(RoleContext);
}

function App() {
  const loginRole = (userRole) => {
    setRole(userRole);
  };
  const [role, setRole] = useState("");

  const [items, setItems] = useState();

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/products").then((res) => {
        console.log(res.data);
        setItems(res.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="App">
      <RoleContext.Provider value={{ role, setRole }}>
        <Routes>
          <Route path="/" element={<Home loginRole={loginRole} />} />

          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route index element={<DashPanel />} />
            <Route path="panel" element={<DashPanel />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders items={items} />} />
            <Route path="moderator" element={<Moderator />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </RoleContext.Provider>
    </div>
  );
}

export default App;
