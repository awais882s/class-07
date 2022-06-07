import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Company Logo
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Company">
                  Company
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Register">Register</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
