
import '../css/Global.css'
import * as FiIcons from 'react-icons/fi';
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

        
        <div style={{display:"flex",justifyContent:"center"} } >
            {
                imageURLS.map((item,index)=>{
                    return(
                         <img onLoad={onLoad} className="imageBGloader" onClick={(event)=>{toggleFullImagePopup(event)}}  
                        style={{borderRadius:"0.5rem",width:props.elementWidth,height:props.elementHeight,objectFit: "cover",display:index===currentURL?"unset":"none",opacity:loaded?"100%":"0"}}  src={loaded?item:Lottie} alt="Designs"/>
                    )
                })
            }
        </div>
        <div className='controlGroup' style={{display:"flex",margin: "1rem auto",flexDirection:"row",justifyContent:"space-between",marginTop:"0.5rem",width:props.elementWidth}}>
            <button className='backButton' onClick={()=>{onLeftClick()}} >
                 <FiIcons.FiArrowLeft className='backIcon' style={{fontSize:"24px"}} ></FiIcons.FiArrowLeft>
            </button>
           
            <p>{currentURL+1+"/"}{imageURLS.length}</p>

            <button className='backButton'  onClick={()=>{onRightClick()}}  >
                  <FiIcons.FiArrowRight className='backIcon' style={{fontSize:"24px"}} ></FiIcons.FiArrowRight>
            </button>
        </div>
        {isImgeOpen && <FullImage handleClose={toggleFullImagePopup} imgSrc={imgSrc}/>}
    </div>
  )
}
