import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";
import About from "../page/about/About";  
import Collection from "../page/collection/Collection";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Coleccion" element={<Collection />} />
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Quien-soy" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router; 