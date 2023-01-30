import { createContext, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import Content from "./pages/Content";
import axios from "axios";

const RoleContext = createContext(null);
const ItemsContext = createContext(null);

export function useRoleContext() {
  return useContext(RoleContext);
}

export function useItemsContext() {
  return useContext(ItemsContext);
}

function App() {
  const [products, setProducts] = useState([]);
  const [role, setRole] = useState();

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/products").then(res => setProducts(res.data))
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <div className="App">
      <RoleContext.Provider value={{ role, setRole }}>
        <ItemsContext.Provider value = {{ products, setProducts }}>
          <Routes>
            <Route path="/*" element={<Home />}>
              <Route index element={<Content />} />
              <Route path="item">
                <Route path=":itemId" element={<ItemPage />} />
              </Route>
            </Route>
          </Routes>
        </ItemsContext.Provider>
      </RoleContext.Provider>
    </div>
  );
}

export default App;
