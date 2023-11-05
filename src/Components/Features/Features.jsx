import React from "react";
import "./Features.css";
const Features = () => {
  return (
    <div className="boxfe">
      {/* <h1>Features</h1> */}
      <div className="feat">
        <h1 className="cred-ai">cred<span className="ai">.ai</span></h1>
        <h1 className="exclusive">exclusive</h1>
        <h1 className="features">features</h1>
      </div>
      <div className="scrool">
        <img
          src="https://images.unsplash.com/photo-1483706799423-125c0738c674?auto=format&fit=crop&q=80&w=1476&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          width={'30%'}
        />
      </div>
    </div>
  );
};

export default Features;
