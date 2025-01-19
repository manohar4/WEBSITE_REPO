
import '../css/Global.css'
import * as FaIcons  from "react-icons/fa";
import { useState } from 'react';
import FullImage from '../components/FullImage';
import Lottie from '../assets/lottie.gif'

export default function Carousel(props) {

    const imageURLS = props.elementData;

  const[currentURL,setCurrentURL] = useState(0);
  const [isImgeOpen, setIsImgeOpen] = useState(false);
  const [imgSrc,setImgSrc] = useState(Lottie);

    const onLeftClick =()=>{

        if(currentURL > 0){
            setCurrentURL(currentURL-1);
        }
        else{
            setCurrentURL(imageURLS.length-1);
        }
        
    }

    const onRightClick =()=>{

        if(currentURL < imageURLS.length-1){
            setCurrentURL(currentURL+1);
        }
        else{
            setCurrentURL(0);
        }
    }

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

      const[loaded,setLoaded]= useState(false)
      
  function onLoad() {
    setLoaded(true);
  }

 
  return (
    <div> 
        <div style={{display:"flex",justifyContent:"center", backgroundColor:"var(--bg-color7)",padding:"1rem",borderRadius:"1rem 1rem 0rem 0rem"} } >
            {
                imageURLS.map((item,index)=>{
                    return(

                        <figure key={index} style={{display:index===currentURL?"unset":"none"}}>
                       <img key={index} onLoad={onLoad} className="imageBGloader" onClick={(event)=>{toggleFullImagePopup(event)}}  
                        style={{borderRadius:"0.5rem",width:props.elementWidth,height:props.elementHeight,objectFit: "cover",opacity:loaded?"100%":"0"}}  src={loaded?item.elementUrl:Lottie} alt="Designs"/>
                        <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem", display: item.elementCaption?"":"none"}}><cite>{item.elementCaption}</cite></figcaption>
                    </figure>
            
                        
                      
                       
                    )
                })
            }
        </div>
        <div className='controlGroup' style={{padding:"0.5rem",borderRadius:"0rem 0rem 1rem 1rem",backgroundColor:"var(--bg-color7)",display:"flex",marginTop: "2px",flexDirection:"row",justifyContent:"space-between",width:props.elementWidth}}>
            <button className='primaryBtn' style={{margin:"0rem"}} onClick={()=>{onLeftClick()}} >
                 <FaIcons.FaArrowAltCircleLeft className='fillbtn' style={{fontSize:"24px"}} color='var( --text-color2)'/> 
          </button>
           
            <p style={{width:"4rem",alignSelf:"center",textAlign:"center"}}>{currentURL+1+"/"}{imageURLS.length}</p>

            <button className='primaryBtn' style={{margin:"0rem"}}   onClick={()=>{onRightClick()}}  >

                  <FaIcons.FaArrowAltCircleRight className='fillbtn' style={{fontSize:"24px"}} color='var( --text-color2)'/> 
            </button>
        </div>
        {isImgeOpen && <FullImage handleClose={toggleFullImagePopup} imgSrc={imgSrc}/>}
    </div>
  )
}
