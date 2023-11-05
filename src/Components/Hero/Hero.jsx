import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      {/* <h1>Crad</h1> */}
      <div className="l">
        <h1>you’re better</h1>
        <h1>than your</h1>
        <h1>bank™</h1>
        <p>
          cred.ai™ is a high-tech and premium everyday card spending experience,
          100% mobile with a free metal card.
        </p>
        <p>
          With the cred.ai guaranty you never pay fees or interest1, never
          overspend, build credit automatically2, and spend your paycheck
          early3, with cutting edge tech you can’t get anywhere else.
        </p>
        <p>
          We think it’s the best looking unicorn themed free metal card on
          earth, but that’s just us.
        </p>
        <div className="horse">
          <div className="image-container">
            <img
              src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2021/03/signupbutton.png"
              alt="one"
              width={"78%"}
            />
          </div>
          <p>or</p>
          <div className="image-container">
            <img width={"58%"} src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2021/03/appstorewhiteonblack.png" alt="two" />
          </div>
          <div className="image-container">
            <img width={"58%"} src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2021/03/googlePlay.png" alt="third" />
          </div>
          
        </div>
        <div className="condition">
            <p>*Applying does not impact your FICO score, and a FICO score is not required to apply.</p>
            <p>**Only available to USA residents.  Requires mobile device with iOS 12/Android 9 or higher.</p>
          </div>
      </div>
      <div className="r">
        <video autoPlay loop muted>
          <source
            src="https://cred.ai/wp-content/uploads/2021/05/mrEdBNEW.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
