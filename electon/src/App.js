// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard/*" element={<Dashboard />}>
                    <Route index element={<Users />} />
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
