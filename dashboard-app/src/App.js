import { Route, Routes } from "react-router-dom";
import DataContext from "./context/DataContext";
import Dashboard from "./pages/Dashboard";
import DashPanel from "./pages/DashPanel";
import Home from "./pages/Home";
import Moderator from "./pages/Moderator";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <DataContext>
        <Routes>
          <Route path="/" element={<Home />} />
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
      </DataContext>
    </div>
  );
}

export default App;
