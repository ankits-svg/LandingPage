import React from "react";
import "./Metal.css";

const Metal = () => {
  return (
    <div className="metal">
      <div className="boxmetal">
        <div className="video-container">
          <video autoPlay loop muted className="vi">
            <source
              src="https://cred.ai/wp-content/uploads/2021/06/Phone-For-Card30.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <img
            src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2020/08/card-for-phone.png"
            alt="Overlapped Image"
            className="overlapped-image"
          />
        </div>
      </div>
      <div className="box3metal">
        <h1>your new metal</h1>
        <h1>card is so fired </h1>
        <h1>up.</h1>
        <p>
        With the <span className="bol">cred</span>.ai guaranty you never pay fees or interest1, never overspend, and build credit automatically.
        </p>
        <p>
        Use exclusive <span className="bol">cred</span>.ai tech like Check Please™ and Flux Capacitor, and get your paycheck up to two days early.
        </p>
        <p>
        100% mobile, 24/7 support, real-time control, and virtual Stealth Cards™ active instantly upon approval.
        </p>
      </div>
    </div>
  );
};

export default Metal;
