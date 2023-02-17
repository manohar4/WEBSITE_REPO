import React from 'react'
import loading from '../assets/preloader.mp4'
import './../css/Global.css'

export default function Spinner() {
  return (
    <div>

{/* <div className='spinnerFirstOverlay'></div>
        <div className='spinnerSecondOverlay'></div> */}
    

  

    <div className='spinnerMain' style={{height:'100vh',width:"100vw",position:'fixed',margin:"auto",overflowY:'hidden',alignItems:'center',display:'flex',zIndex:"1000",background:"black"}} >
        <video className='spinnerVideo' width="160" height="160" autoPlay loop style={{margin:"auto"}} >
        <source src={loading} type="video/mp4"/>
                 Your browser does not support the video tag.
        </video>
    </div>
    </div>
  )
}
