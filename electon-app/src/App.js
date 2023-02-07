import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import Content from "./pages/Content";
import DataContext from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataContext>
        <Routes>
          <Route path="/*" element={<Home />}>
            <Route index element={<Content />} />
            <Route path="item">
              <Route path=":itemId" element={<ItemPage />} />
            </Route>
          </Route>
        </Routes>
      </DataContext>
    </div>
  );
}

export default App;
