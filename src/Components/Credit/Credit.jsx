import React from "react";
import "./Credit.css";
const Credit = () => {
  return (
    <div className="cre">
      <div className="cred">
        {/* <h1>Credit</h1> */}
        <div className="a">
          <h1>giving credit</h1>
          <h1>where credit</h1>
          <h1>is due.™</h1>
          <p>
            Your metal unicorn card is a real credit card, but cred.ai™
            automation and the cred.ai™ guaranty makes sure you never pay fees
            or interest1 and never overspend, and automatically manages your
            balances to optimize your credit utilization.
          </p>
          <p>
          Spend like you’re using a debit card, and build your credit2 like a pro.
          </p>
        </div>
        <div className="b">
          <video autoPlay loop muted>
            <source
              src="https://cred.ai/wp-content/uploads/2021/06/Bull-800-EXACT-25-RF.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Credit;
