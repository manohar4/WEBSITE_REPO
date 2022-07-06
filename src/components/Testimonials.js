import React,{useEffect}from 'react'
import {animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import '../css/Testimonials.css'

export default function Testimonials(props) {

  const [style, set] = useSpring(() => ({
    transform: "perspective(40rem) rotateY(0deg)"
  }));

  const bind = useScroll(event => {
    set({
      transform: `perspective(40rem) rotateY(${
        event.scrolling ? event.delta[0] : 0
      }deg)`
    });
  });

  useEffect(()=>{
    if(window.innerWidth<1024){
      const boxes = document.querySelectorAll('.Tcard');

      boxes.forEach(box => {
        box.style.width="90%"
});
  }},[]);

   
    return (
        <div className="container" {...bind()}>
              { props.elementData ? props.elementData.map((src,index) => (
                  <animated.div key={index} className="Tcard" style={{...style,backgroundImage: `url(${src})`}}> <div className="glow-wrap"><i className="glow"></i></div>  </animated.div>)):""}</div>)}