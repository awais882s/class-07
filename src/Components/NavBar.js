import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Company Logo</Link>
      <Link to="/">Home</Link>
      <Link to="/Company">Company</Link>
      <Link to="/About">About</Link>
    </div>
  );
}
