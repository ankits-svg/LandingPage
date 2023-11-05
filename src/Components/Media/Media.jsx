import React from "react";
import "./Media.css";
const Media = () => {
  return (
    <div className="box1">
      {/* <h1>Media</h1> */}
      <div className="box3">
        <video width="840" height="560" autoPlay loop muted>
          <source
            src="https://cred.ai/wp-content/uploads/2021/06/croppedcarrier23.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="box4">
        <div>
          <img
            src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2021/03/signupbutton.png"
            alt="signup"
            width={'40%'}
          />
        </div>
        <div className="via">or sign up via</div>
        <div>
          
          <img
            src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2021/03/appstorewhiteonblack.png"
            alt="appstore"
            width={'20%'}
          />
          
          <img
            src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2021/03/googlePlay.png"
            alt="googleplay"
            width={'20%'}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Media;
