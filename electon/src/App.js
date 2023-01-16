import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
// import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard/*" element={<Dashboard />}>
                    <Route index element={<Users />} />
                    <Route index path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
