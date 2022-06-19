import React from 'react'
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

    // useEffect(()=>{
      // const style = useSpring({
      //   from: {
      //     transform: "perspective(32rem) rotateY(0deg)"
      //   },
      //   transform: "perspective(32rem) rotateY(25deg)"
      // });  
       
    // ,[]);
    const movies = [
        "/movie1.jpeg",
        "/movie2.jpeg",
        "/movie3.jpeg",
        "/movie4.webp",
        "/movie5.webp"
      ];
   
    return (
        <div className="container" {...bind()}>
              {movies.map(src => (
                  <animated.div key={src} className="Tcard" style={{...style,backgroundImage: `url(${src})`}} />
              ))
              }
        </div>
        )}