import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pagination/Home";
import Page from "./components/pagination/Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="pages/*">
            <Route index element={<Page />} />
            <Route path=":pageId" element={<Page />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
