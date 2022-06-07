import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";

// pages for navigations
import Footer from "../Components/Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Company from "../Pages/Company";
import Contact from "../Pages/Contact";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="justify-content-center d-flex text-white">
          <div className="container card shadow m-5 w-25 ui">
            <div className="card-body">
              <h2>
                <Routes>

                  <Route path="/" element={<Home />} />
                  <Route path="About" element={<About />} />
                  <Route path="Company" element={<Company />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="Register" element={<Register />} />
                  <Route path="Login" element={<Login />} />
                  <Route />
                </Routes>
              </h2>
              <Footer />

            </div>
          </div>
        </div>
      </BrowserRouter>
      
    </>
  );
}

// auth
// private routing
// nested routing
// dynamic routing