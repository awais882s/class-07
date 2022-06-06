import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";

// pages for navigations
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Company from "../Pages/Company";
import Contact from "../Pages/Contact";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
export default function Routing() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Company" element={<Company />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Reister" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
