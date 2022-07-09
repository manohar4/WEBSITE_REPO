import React from 'react'
import { useState } from 'react';
import FullImage from '../components/FullImage';


export default function ImageGrid(props) {

   // const imageURLS = props.elementData;
    const [isImgeOpen, setIsImgeOpen] = useState(false);
    const [imgSrc,setImgSrc] = useState("");

    //const imageURLS = ["https://bit.ly/1tSEfja","https://bit.ly/1rXAWHn","https://bit.ly/1rXAWHn","https://bit.ly/Ux98xe","https://bit.ly/1nR24qx","https://bit.ly/1oAM0tK"]

    const imageURLS = props.elementData;
    const capitons = props.elementCaptions;
    const toggleFullImagePopup = (event) => {

        if(!isImgeOpen){
            document.getElementsByTagName("body")[0].style.overflowY = "hidden"
        }
        else{
            document.getElementsByTagName("body")[0].style.overflowY = ""
        }
        setImgSrc(event.target.src);
        setIsImgeOpen(!isImgeOpen);
      }

  return (

<div className="imageGrid">


    {
        imageURLS.map((item,index)=>{
            return (
                <div  style={{width:props.elementWidth,aspectRatio:"1/1",display:"inline-block",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat: "no-repeat",marginBottom:"2rem"}}>
            <figure key={index} style={{height:"100%",padding:"1rem"}}>
                <img onClick={(event)=>{toggleFullImagePopup(event)}}  style={{width:"100%",height:"100%",objectFit: "cover",borderRadius:"0.5rem",marginBottom:'0.5rem'}}  src={item} alt="Project Details" ></img>
                <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: capitons[index]!== ""?"":"none"}}><cite>{capitons[index]}</cite></figcaption>
            </figure>
            </div>
            )
        })
    }
  
  {/* <div class="tile" >

       
    <img src='https://bit.ly/1tSEfja'/>
  </div>
  
  <div class="tile" >
    <img src='https://bit.ly/1rXAWHn'/>
  </div>
  
   <div class="tile" >
    <img src='https://bit.ly/Ux98xe'/>
  </div>
  
   <div class="tile" >
    <img src='https://bit.ly/1nR24qx'/>
  </div>
  
  <div class="tile" >
    <img src='https://bit.ly/1oAM0tK'/>
  </div> */}
  
  
  {isImgeOpen && <FullImage handleClose={toggleFullImagePopup} imgSrc={imgSrc}/>}
</div>
  )
}
