import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Dashboard from "./pages/Dahsboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Users from "./pages/Users";

import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
