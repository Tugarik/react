import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pagination/Home";
import Page from "./components/pagination/Page";
import Pagination from "./components/pagination/Pagination";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route path="pages">
            <Route path=":pageId" element={<Page />} />
          </Route>
        </Route>
      </Routes>
      <Pagination />
    </>
  );
}

export default App;
