import React from "react";
import "./Navbar.css";
import CartIcon from "../CartIcon/CartIcon";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div onClick={() => navigate("/")} className="navbar__logo">
        <h1>WS</h1>
      </div>
      <div className="navbar__cart">
        <CartIcon />
      </div>
    </nav>
  );
}
