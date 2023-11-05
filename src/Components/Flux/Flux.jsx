import React from "react";
import "./Flux.css";

const Flux = () => {
  return (
    <div className="boxF">
      {/* <h1>Capacitor</h1> */}
      <div className="box2">
        <video autoPlay loop muted>
          <source
            src="https://cred.ai/wp-content/uploads/2021/06/Fluxloop20.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="box3e">
        <h1>
          flux<span className="capa">capacitor</span> is a
        </h1>
        <h1>time machine for</h1>
        <h1>your money.</h1>
        <p>
          <span className="flux">flux</span>capacitor lets you get your paycheck
          early3, and a whole lot more.
        </p>
        <p>
          Beyond just paychecks, it gives you early access to the spending power
          of almost any inclearing ach deposit3.
        </p>
        <p>
          It can also detect and react to inclearing debits before they happen.
          Know on Wednesday what your utility company will charge you on Friday.
        </p>
        <p>
          Never pay a fee for the feature. Turn off any part of the feature at
          any time. You have the control.
        </p>
      </div>
    </div>
  );
};

export default Flux;
