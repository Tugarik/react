import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dash_Panel from "./pages/Dash_Panel";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Moderators from "./pages/Moderators";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import ItemPage from "./pages/ItemPage";
import Content from "./pages/Content";

function App() {
  const loginRole = (userRole) => {
    setRole(userRole);
  };
  const [role, setRole] = useState("admin");
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home loginRole={loginRole} />}>
          <Route index element={<Content />} />
          {/* <Route path="home" element={<Content />} /> */}
          <Route path="item">
            <Route path=":itemId" element={<ItemPage />} />
          </Route>
        </Route>
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
