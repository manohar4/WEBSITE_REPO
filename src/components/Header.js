import React, {useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import { TiArrowBack } from 'react-icons/ti'

export default function Header(props) {

    var [smallerDeviceCheck, setSmallerDeviceCheck] = useState(true);

    useEffect(()=>{
        if(window.innerWidth<1024){
            setSmallerDeviceCheck= true;
        }
        else{
            setSmallerDeviceCheck = false;
        }

        if(props.back){
            // eslint-disable-next-line
            document.getElementsByClassName('back')[0].style.display= "unset";
        }
        else{
            // eslint-disable-next-line
            document.getElementsByClassName('back')[0].style.display= "none";
        }
        }
         // eslint-disable-next-line
    ,[]);

   

    window.addEventListener("scroll",()=>{
        var header = document.querySelector("#headerID");
        if(smallerDeviceCheck){
            if(window.scrollY>104){

                header.classList.remove("HeaderFixed");
                header.classList.add("HeaderSticky");
            }
            else if(window.scrollY===0){
                header.classList.remove("HeaderSticky");
                header.classList.add("HeaderFixed");
            }

        }
        
    })
   

// var smallerDeviceCheck;
//     if(window.innerWidth<1024){
//         smallerDeviceCheck= true;
        
//     }
//     else{
//         smallerDeviceCheck= false;
//     }

    return (
        <>
        <div id="headerID" className='HeaderFixed'>
                         <Link className='back' to={props.backTo}>
                             <button style={{margin:"0rem",padding:"0.5rem 0.8rem",borderRadius:"2rem",top:"1rem",left:"1rem",zIndex:"1000"}} className='fillBtn'> <TiArrowBack className='backIcon' style={{color:'var( --text-color0)'}}/>Back</button>
                        </Link>
            {props.headerTitle}
        </div>
        
          
        </>
      )
  
}

