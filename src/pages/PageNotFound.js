
import React from 'react';
import '../App.css'
import notFoundGif from '../assets/404.gif'
import { useNavigate } from "react-router-dom";


export default function PageNotFound() {
    const navigation = useNavigate();
    const onHomeClick =()=>{
        navigation("/")
    }
    
  return (
    <div className='PageNotFound' style={{height:"100vh"}}>
        <div className='col' style={{textAlign:"center", display: "flex",height:"100%",margin:"0",alignItems:"center"}}>
            <div className='row' style={{justifyContent:"center"}}>
                <div style={{width:"100%",marginBottom:"2rem"}}>
                    <img style={{width:"30%"}} src={notFoundGif}></img>
                </div>
                
                <h1 style={{marginBottom:"1rem"}}>Sorry! Page Not Found</h1>
                <p style={{marginBottom:"1rem"}}>The Link you followed is probably broken or removed</p>
                <button className='primaryBtn' onClick={()=> {onHomeClick()}}>Go to Home</button>
                </div>
       </div>
    </div>
  )
}
