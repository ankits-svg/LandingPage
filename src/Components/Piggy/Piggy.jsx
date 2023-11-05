import React from "react";
import "./Piggy.css";
const Piggy = () => {
  return (
    <div className="piggy">
      <div className="box2">
        <video autoPlay loop muted>
          <source
            src="https://cred.ai/wp-content/uploads/2021/06/funding26.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="box3">
        <h1>your bank should</h1>
        <h1>never be a piggy</h1>
        {/* <h1>your money.</h1> */}
        <p>
          Access the spending power of your paycheck and other deposits up to
          two days before they even hit.
        </p>
        <p>
          Get cash at over 55,000 free ATM’s4, make instant deposits and mobile
          check deposits at no fee, and all deposits are FDIC insured up to
          $250,000.
        </p>
        <p>
          Use Flux Capacitor to automatically protect yourself against future
          charges and withdrawals.
        </p>
        
      </div>
    </div>
  );
};

export default Piggy;
