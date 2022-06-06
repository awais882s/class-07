import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";

// pages for navigations
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import About from "../Components/About";
import Company from "../Components/Company";
export default function Routing() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Company" element={<Company />} />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
