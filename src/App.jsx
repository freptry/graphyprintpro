import "./index.scss";
import React from "react";
import Home from "./pages/Home";
import Branding from "./pages/Branding";
import Forprint from "./pages/Forprint";
import Motion from "./pages/Motion";
import Webdev from "./pages/Webdev";
import Layout from "./components/layaout";
import NoPage from "./pages/Nopage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="branding" element={<Branding />} />
          <Route path="forprint" element={<Forprint />} />
          <Route path="motion" element={<Motion />} />
          <Route path="webdev" element={<Webdev />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
