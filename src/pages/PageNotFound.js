
import React,{useEffect} from 'react';
import '../App.css'
import notFoundGif from '../assets/404.gif'


export default function PageNotFound() {
    const onHomeClick =()=>{
        window.open("https://www.manoharmanu.in","_self");
    }




    useEffect(()=>{

        
        document.getElementsByClassName('PageNotFound')[0].style.marginLeft='0px';
        if(window.innerWidth<1024){
            document.getElementsByClassName('PageNotFound')[0].style.marginLeft='0px';
            document.getElementsByClassName('nav-menu-mobile')[0].style.display = 'none'
        }
        else{
            document.getElementsByClassName('nav-menu')[0].style.display = 'none'
        }
    },
    // eslint-disable-next-line
    [])
    
  return (
    <div className='PageNotFound' style={{height:"100vh"}}>
        <div className='col' style={{textAlign:"center", display: "flex",height:"100%",margin:"0",alignItems:"center"}}>
            <div className='row' style={{justifyContent:"center",padding:"1rem"}}>
                <div style={{width:"100%",marginBottom:"2rem"}}>
                    <img autoPlay style={{width:"30%"}} src={notFoundGif} alt="Not found Gif"></img>
                </div>
                
                <h1 style={{marginBottom:"1rem"}}>Sorry! Page Not Found</h1>
                <p style={{marginBottom:"1rem"}}>The Link you followed is probably doesn't exist or broken or removed </p>
                <button className='primaryBtn' onClick={()=> {onHomeClick()}}>Go to Home</button>
                </div>
       </div>
    </div>
  )
}
