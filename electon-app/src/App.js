import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dash_Panel from "./components/Dash_Panel";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Moderators from "./pages/Moderators";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

function App() {
  const loginRole = (userRole) => {
    setRole(userRole);
  };
  const [role, setRole] = useState("admin");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home loginRole={loginRole} />} />
        <Route path="/dashboard/*" element={<Dashboard role={role} />}>
          <Route index element={<Dash_Panel />} />
          <Route path="panel" element={<Dash_Panel />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="moderators" element={<Moderators />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
