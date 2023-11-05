import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      {/* <h1>Crad</h1> */}
      <div className="left">
        <h1>won’t break the</h1>
        <h1>bank, but could</h1>
        <h1>break a window.</h1>
        <p>That’s a solid, heavy, real metal card. Take it for a spin.</p>
        <p>
          It weighs more than those other fancy black cards, but you don’t pay a
          fee to get it.
        </p>
        <p>
          We think it’s the best looking unicorn themed free metal card on
          earth, but that’s just us.
        </p>
      </div>
      <div className="right">
        <img
          src="https://media.imajize.com/4068479/frames/3203850/1;1;metal%20card_v3_00090.png/resize;w_669;h_495;bg_transparent;f_inside/optimize;bg_transparent/image"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Card;
