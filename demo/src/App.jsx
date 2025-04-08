import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Products from "./Components/Products";
import NoPage from "./Components/NoPage";
import DisplayResult from "./lab3/App";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <DisplayResult />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
