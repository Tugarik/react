import { Route, Routes } from "react-router-dom";
import "./App.css";
import PaginationHome from "./components/pagination/PaginationHome";
import Page from "./components/pagination/Page";
import Home from "./components/Home";
import RoutesHome from "./components/routes/RoutesHome";
import Html from "./components/routes/Html";
import Javascript from "./components/routes/Javascript";
import React from "./components/routes/React";
import HtmlPage from "./components/routes/HtmlPage";
import JsPage from "./components/routes/JsPage";
import ReactPage from "./components/routes/ReactPage";
import Side from "./components/routes/Side";
import { useState } from "react";
import SidePage from "./components/routes/SidePage";

function App() {
  const [section, setSection] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/pagination" element={<PaginationHome />}>
          <Route path="pages/*">
            <Route index element={<Page />} />
            <Route path=":pageId" element={<Page />} />
          </Route>
        </Route>

        <Route path="/routes" element={<RoutesHome setSection={setSection} />}>
          <Route path="html/*" element={<Html />}>
            <Route index element={<HtmlPage />} />
            <Route path=":htmlId" element={<HtmlPage />} />
          </Route>
          <Route path="javascript/*" element={<Javascript />}>
            <Route index element={<JsPage />} />
            <Route path=":jsId" element={<JsPage />} />
          </Route>
          <Route path="react/*" element={<React />}>
            <Route index element={<ReactPage />} />
            <Route path=":reactId" element={<ReactPage />} />
          </Route>
          <Route path={`${section}/*`} element={<Side val={section} />}>
            <Route index element={<SidePage val={section} />} />
            <Route
              path={`:${section}Id`}
              element={<SidePage val={section} />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
