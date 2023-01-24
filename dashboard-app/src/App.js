import { createContext, useContext, useState } from "react";
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
  const [isLogged, setIsLogged] = useState(false);
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
            <Route path="orders" element={<Orders />} />
            <Route path="moderator" element={<Moderator />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </RoleContext.Provider>
    </div>
  );
}

export default App;
