
import '../css/Global.css'
import * as FiIcons from 'react-icons/fi';
import { useState } from 'react';


export default function Carousel(props) {

    const imageURLS = props.elementData;

  const[currentURL,setCurrentURL] = useState(0);

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

    
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center"}} >
            <img style={{borderRadius:"0.5rem",width:props.elementWidth,height:props.elementHeight,objectFit: "cover"}}  src={imageURLS[currentURL]} alt="Designs"/>
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
    </div>
  )
}
