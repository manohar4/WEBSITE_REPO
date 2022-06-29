import React, {useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import * as FiIcons from 'react-icons/fi'

export default function Header(props) {

    useEffect(()=>{
        
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
        if(window.scrollY>104){

            header.classList.remove("HeaderFixed");
            header.classList.add("HeaderSticky");
        }
        else if(window.scrollY===0){
            header.classList.remove("HeaderSticky");
            header.classList.add("HeaderFixed");
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
                            <button className='backButton'  >
                                <FiIcons.FiArrowLeftCircle className='backIcon'/><p>Back</p>
                            </button>       
                        </Link>
            {props.headerTitle}
        </div>
        
          
        </>
      )
  
}

