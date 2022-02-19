import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="heroic">
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          left: "40vw",
          top: "40vh",
        }}
      >
        <h2 style={{ fontWeight: "bolder", letterSpacing: "2px" }}>
          Prepare With Us
        </h2>
        <p style={{color:"gray",fontSize:"13px"}}>Build your carrer with us</p>
        <Link to="/register"><button className="btn btn-primary">Get Started</button></Link>
      </div>
    </div>
  );
}
