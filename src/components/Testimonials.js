import React,{useEffect}from 'react'
import {animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import '../css/Testimonials.css'
import { FetchAllAttachements } from '../helper/Context';

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


    const testimonials = [
        "https://v5.airtableusercontent.com/v1/5/5/1656547200000/hI7nm-redEA5XM8aDY4hSg/koXzQSwO04zHOGAMN917bvbnV3y_i8KyXNs99vNMvdHUGwhUSvfkB7ak-xldPff_yPzyPP37eAfg4RQa3wq3hw/SGefYnsScq6SXkDW57XdgI-8Jvu8-buemUHybPlOlLY",
        "https://v5.airtableusercontent.com/v1/5/5/1656547200000/hI7nm-redEA5XM8aDY4hSg/koXzQSwO04zHOGAMN917bvbnV3y_i8KyXNs99vNMvdHUGwhUSvfkB7ak-xldPff_yPzyPP37eAfg4RQa3wq3hw/SGefYnsScq6SXkDW57XdgI-8Jvu8-buemUHybPlOlLY",
        "https://v5.airtableusercontent.com/v1/5/5/1656547200000/hI7nm-redEA5XM8aDY4hSg/koXzQSwO04zHOGAMN917bvbnV3y_i8KyXNs99vNMvdHUGwhUSvfkB7ak-xldPff_yPzyPP37eAfg4RQa3wq3hw/SGefYnsScq6SXkDW57XdgI-8Jvu8-buemUHybPlOlLY",
        "https://v5.airtableusercontent.com/v1/5/5/1656547200000/hI7nm-redEA5XM8aDY4hSg/koXzQSwO04zHOGAMN917bvbnV3y_i8KyXNs99vNMvdHUGwhUSvfkB7ak-xldPff_yPzyPP37eAfg4RQa3wq3hw/SGefYnsScq6SXkDW57XdgI-8Jvu8-buemUHybPlOlLY",
        "https://v5.airtableusercontent.com/v1/5/5/1656547200000/hI7nm-redEA5XM8aDY4hSg/koXzQSwO04zHOGAMN917bvbnV3y_i8KyXNs99vNMvdHUGwhUSvfkB7ak-xldPff_yPzyPP37eAfg4RQa3wq3hw/SGefYnsScq6SXkDW57XdgI-8Jvu8-buemUHybPlOlLY"
      ]
   
    return (
        <div className="container" {...bind()}>
              { props.elementData ? props.elementData.map(src => (
                  <animated.div className="Tcard" style={{...style,backgroundImage: `url(${src})`}}> <div className="glow-wrap"><i className="glow"></i></div>  </animated.div>)):""}</div>)}