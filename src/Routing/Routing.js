import React from "react";
import {BrowserRouter, Routes ,Route} from "react-router-dom";

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
      <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Company" element={<Company />} />
        <Route/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
