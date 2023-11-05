import React from "react";
import "./Bank.css";
const Bank = () => {
  return (
    <div className="boxF">
      {/* <h1>Capacitor</h1> */}
      <div className="box2">
        <video autoPlay loop muted>
          <source
            src="https://cred.ai/wp-content/uploads/2021/06/hightech26.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="box3">
        <h1>imagine if tony</h1>
        <h1>stark built a </h1>
        <h1>bank.</h1>
        <p>
          <span className="flux">cred</span>.ai™ is a team of builders,
          scientists, artists, and hackers
        </p>
        <p>
          That’s why we have exclusive features like High Security Mode™, Friend
          & Foe List™, Stealth Card™, Check Please™, and Flux Capacitor.
        </p>
        <p>
        This is the most cutting edge way to spend every day.
        </p>
      </div>
    </div>
  );
};

export default Bank;
