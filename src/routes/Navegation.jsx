import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RickAndMortyApp from "../components/RickAndMortyApp.jsx";
import Home from "../components/Home.jsx";
import SpecialCaracter from "../components/SpecialCaracter.jsx"; 

const Navegation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<SpecialCaracter />} />
        <Route path="/*" element={<p>Error 404 Recurso no encontrado</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navegation;
