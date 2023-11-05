import logo from "./logo.svg";
import "./App.css";
// import { useEffect, useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
import Media from "./Components/Media/Media";
import Flux from "./Components/Flux/Flux";
import Features from "./Components/Features/Features";
import Piggy from "./Components/Piggy/Piggy";
import Metal from "./Components/Metal/Metal";
import Credit from "./Components/Credit/Credit";
import Bank from "./Components/Bank/Bank";
import Card from "./Components/Card/Card";
import News from "./Components/News/News";
import Hero from "./Components/Hero/Hero";


function App() {
  // const helloRef = useRef(null);
  // const app = useRef(null);
  // // console.log(helloRef.current)
  // let t1 = useRef(null);
  
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
      
  //     t1.current = gsap
  //       .timeline()
  //       .to(".hello1", {
  //         duration: 2,
  //         rotation: 360,
  //       })
  //       .to(".hello2", {
  //         x: 300,
  //       });
  //   }, app);

  //   return () => ctx.revert();
  // }, []);

  // const handleClick = (e) => {
  //   gsap.to(e.target, {
  //     rotation: "150",
  //     yoyo: true,
  //     repeat: 1,
  //   });
  // };

  // const onEnter=(e)=>{
  //   gsap.to(e.target,{
  //     scale:1.5
  //   })
  // }

  // const onLeave=(e)=>{
  //   gsap.to(e.target,{
  //     scale:1
  //   })
  // }
  return (
    <div className="App">
      {/* <h1 className="hello1">Hello world</h1>
      <h1 className="hello2">Hello world 2</h1>
      <button
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={handleClick}
      >
        Hi!! what are you doing
      </button> */}
      <h1>Landing Page</h1>
      <Hero/>
      <News/>
      <Metal/>
      <Credit/>
      <Bank/>
      <Card/>
      <Piggy/>
      <Features/>
      <Flux/>
      <div style={{ width:"100%",margin:"auto",height:"70px",background: 'linear-gradient(#FFFFFF, #CECECC,#FFFFFF)' }}></div>
      <Media/>
    </div>
  );
}

export default App;
