import React from "react";
import "./App.css";
import { Information, Login, Register } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
