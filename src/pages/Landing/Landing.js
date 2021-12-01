import React from "react";
import { useNavigate } from "react-router";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <h1 className="landing__header">Your number one</h1>
      <h1 className="landing__header">Window shopping site</h1>
      <button onClick={() => navigate("/store")} className="landing__btn">
        Start shopping now
      </button>
    </div>
  );
}
