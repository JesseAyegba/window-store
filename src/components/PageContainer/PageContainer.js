import React from "react";
import "./PageContainer.css";
import Navbar from "../Navbar/Navbar";

export default function PageContainer({ children }) {
  return (
    <div className="pageContainer">
      <Navbar />
      {children}
    </div>
  );
}
