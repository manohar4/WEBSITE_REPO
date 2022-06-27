import React from 'react'
import './../css/Global.css'
import * as FiIcons from 'react-icons/fi';




const FullImage = (props)=>{
    return (
        <div  className="popup-box"> 
                <FiIcons.FiX style={{position: "absolute",top: "1rem",right: "1rem",color:'white',fontSize:"32px"}} className="closeIcon" onClick={props.handleClose}/>
                <img style={{margin: "auto",borderRadius:"0.5rem",maxHeight:"80%"}} src={props.imgSrc} alt="carouselImages"></img>
            </div>
      )

}
export default FullImage;
