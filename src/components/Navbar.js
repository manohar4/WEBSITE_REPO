import React, { use, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { SideBarData } from './SideBarData';
import './Navbar.css';
import LogoAvatar from '../assets/logoAvatar.png'
import RainPic from "../assets/BGMUSIC/albumCovers/Rain.png"

import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";
import { HiSun } from "react-icons/hi";
import { PiMoonStarsFill } from "react-icons/pi";




var audioCount =0;

export default function Navbar() {

const[bgMusicImage,setBgMusicImage] = useState(RainPic)
const[play,setPlay]=useState(true);
const[disabled,setDisabled]= useState(true);
const[darkChecked,setDarkChecked] = useState(false);
const[headerTitle,setHeaderTitle] = useState("Manohar Manu");



// var audiosList = [Rain,Waves,Forest,Clouds];
// var audio = document.getElementById("audio");



var smallerDeviceCheck;
    if(window.innerWidth<1024){
        smallerDeviceCheck= true;
        
    }
    else{
        smallerDeviceCheck= false;
    }



const [selectedChild,setSelectedChild]=  useState(null);




useEffect(()=>{


    if(document.documentElement.getAttribute('data-theme') === 'light'){
        setDarkChecked(true);
       
    }

    var selectionPath = document.location.pathname.split("/")[1];
    if(selectionPath ===''){
        updateNavSelection(1);
        setSelectedChild(1);
        
       
    }
    else if(selectionPath ==='works' || selectionPath ==='ProjectDetails' || selectionPath ==='projectDetails'  ){
        updateNavSelection(2);
        setSelectedChild(2);
       
        
    }
    else if(selectionPath === 'writings'|| selectionPath ==='writingDetails' || selectionPath ==='WritingDetails'){
        updateNavSelection(3);
        setSelectedChild(3);
       
    }
    else if(selectionPath === 'littleThings' || selectionPath === 'LittleThings' || selectionPath === 'Littlethings' ){
        updateNavSelection(4);
        setSelectedChild(4);
       
    }
    else if(selectionPath === 'OtherActivities' || selectionPath === 'DesignLibrary' || selectionPath === "otherActivities"){
        updateNavSelection(5);
        setSelectedChild(5);
    }
    else{
        updateNavSelection(1);
        setSelectedChild(1);
    }


    window.addEventListener("scroll",()=>{
        var header = document.querySelector("#headerID");
        if(window.scrollY>104){
            document.querySelector('.nav-menu').style.backgroundColor = "var(--bg-color7)";
            document.querySelector('.nav-menu').style.backdropFilter = "saturate(180%) blur(20px)";
            document.querySelector('.nav-menu').style.webkitBackdropFilter = "saturate(180%) blur(20px)";
         }
         else if(window.scrollY===0){
             document.querySelector('.nav-menu').style.backgroundColor = "#00000000";
         }
        
    })

   


    function updateNavSelection(index){


        if(!smallerDeviceCheck){
             //setting default selected nav item - selected
           const PILL = document.querySelector('#pill');
           const MENU_LINKS = document.querySelectorAll('.item');
           const MENULINKSPARENT = document.querySelector('#items');
   
           const dimensions = MENU_LINKS[index-1].getBoundingClientRect();
               PILL.style.width = dimensions.width+ 'px';
               PILL.style.height = 32 + 'px';
               PILL.style.top = 2.5 + 'px';
               PILL.style.left = dimensions.left - MENULINKSPARENT.getBoundingClientRect().left + 'px';
               PILL.style.paddingRight = 12;
               PILL.style.paddingTop = 8;
               PILL.style.paddingBottom = 8;
               let selected = selectedChild;
               function setPill() {
               MENU_LINKS.forEach((e, i) => {
                   if (i === selected) {
                   e.classList.add('custom-button');
                   
                   } else {
                   e.classList.remove('custom-button');
                   }
               });
               };
              setPill();

        }
       else{
        return;
       }

   }

},[])


function scrambleText(element, newText, duration = 400) {

    if(newText === "Home"){
        newText = "Manohar Manu";
    }
    const chars = '!<>-_\\/[]{}—=+*^?#___';
    const oldText = element.textContent;
    const length = Math.max(oldText.length, newText.length);
    let scrambledText = '';
    let frame = 0;

    const interval = setInterval(() => {
        scrambledText = '';
        for (let i = 0; i < length; i++) {
            if (i < frame && i < newText.length) {
                scrambledText += newText[i];
            } else {
                scrambledText += chars[Math.floor(Math.random() * chars.length)];
            }
        }
        element.textContent = scrambledText;

        frame++;
        if (frame > length) {
            clearInterval(interval);
            element.textContent = newText; // Set final text
        }
    }, duration / length);
}




function darkify(event) {

const ripple = document.querySelector('.ripple');
ripple.style.display = "unset";
const bulb = document.querySelector('.darkModeIcon');

ripple.style.left =  bulb.offsetLeft + 'px';
ripple.style.animation = "none";   

    if(document.documentElement.getAttribute('data-theme') === 'light'){

   

    // Trigger the animation
    document.getElementById('bulbonID').style.display = "none";
    document.getElementById('bulboffID').style.display = "unset";
   
    ripple.style.backgroundColor = '#0d0d0d';
    ripple.style.animation = 'ripple-animation 1s ease-in forwards'; // Use forwards to retain final state

    setTimeout(() => {

        document.body.style.backgroundColor = "#0d0d0d";
        ripple.style.animation = "none";
        document.documentElement.setAttribute('data-theme','dark');
    event.target.title = 'Dark';
    }, 700);
    setDarkChecked(false);
    
    }
    else{

    
    document.getElementById('bulbonID').style.display = "unset";
    document.getElementById('bulboffID').style.display = "none";

    ripple.style.backgroundColor = '#dfdfdf';
    ripple.style.animation = 'ripple-animation 1s ease-in forwards'; 

    setTimeout(() => {

        document.body.style.backgroundColor = "#dfdfdf";
        ripple.style.animation = "none";
        document.documentElement.setAttribute('data-theme','light');
        event.target.title = 'Light';
    }, 700);

    setDarkChecked(true);
   
    }

}



if(smallerDeviceCheck){
    return (
        <>
        
            <nav className={'nav-menu-mobile'}>

                <ul className='nav-menu-mobile-items'>
                        {SideBarData.map((item,index)=>{
                            const changeStyle = (event,index) => {
                                setSelectedChild(index);
                            };
                            return(
                                <li key={index} className={ index === selectedChild ?item.mobileselectedCName:item.mobileCname} >
                                    <Link  to={item.path} onClick={event =>changeStyle(event,index)} style={{textAlign:"center"}}>
                                    <div>{item.icon}</div>
                                    <span>{item.mobileTitle}</span>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>


            </nav>
          
        </>
      )

}
else{
    return(

        <>
        <div class="gradient-blur"></div>
        <div class="bottom-gradient-blur"></div>

        <div id="menu">
               
                <div class="content">   
                    <div id="pill"></div>
                    <div id="items" className='nav-menu-items' >
                        { SideBarData.map((item,index)=>{

                            const changeStyle = (event,index) => {

                               
                                scrambleText(document.querySelector('#pageTitleId'),item.title);
                             
                                setSelectedChild(index+1);
                                let selected = selectedChild;
                              
                                const PILL = document.querySelector('#pill');
                                const MENU_LINKS = document.querySelectorAll('.item');
                                const MENULINKSPARENT = document.querySelector('#items');

                                const dimensions = event.currentTarget.tagName==='A' ? event.currentTarget.getBoundingClientRect() : event.currentTarget.querySelector('a').getBoundingClientRect();

                                
                                PILL.style.width = 24+  dimensions.width+ 'px';
                                PILL.style.height = 32 + 'px';
                                PILL.style.top = 2.5 + 'px';
                                PILL.style.left = dimensions.left -12 -MENULINKSPARENT.getBoundingClientRect().left + 'px';
                                PILL.style.paddingRight = 12;
                                PILL.style.paddingTop = 8;
                                PILL.style.paddingBottom = 8;
                               
                                function setPill() {
                                MENU_LINKS.forEach((e, i) => {
                                    if (i === selected) {
                                    e.classList.add('custom-button');

                                    } else {
                                    e.classList.remove('custom-button');
                                    }
                                });
                                };
                                setPill();
                            };

                            return(
                                <li  key={index} className={`item`}  >

                                    <Link to={item.path} onClick={event =>changeStyle(event,index)}  >

                                        {item.icon}

                                        <span style={{fontSize:"14px",lineHeight:"16px"}}>{item.title}</span>

                                    </Link>

                                </li>
                            )

                        })} 
                    </div>
                </div>

                <div className="content darkModeIcon" style={{ zIndex:"1000",border:"1px solid var(--bg-color6)",backgroundColor:"var(--bg-color7)",borderRadius:"50%", flex:1, display:"flex", alignItems:"center",justifyContent:"end"}}
                         type="checkbox" checked = {darkChecked}
                        onClick={(event)=>{darkify(event)}}>

                    <div style={{width:"34px",height:"34px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <HiSun id='bulboffID' style={{  color: "#fff",transform: `scale(1)`}} />
                        <PiMoonStarsFill id='bulbonID' style={{ display:"none", color: "#000",transform: `scale(1)`}}/>
                    </div>

                </div>
                <div class="ripple"></div>
                
        </div>

        <nav className={'nav-menu'}>
            <div style={{maxWidth:"min(864px,100vw)",width:"864px"}}>
                <div className='logo'>
                    <Link to="/">
                    <a style={{display:"grid"}}                 ><img style={{width:"1.5rem",height:"1.5rem",borderRadius:"4px"}} src={LogoAvatar} alt="My Notion Avatar"></img></a>
                    </Link>
                   <h4 id='pageTitleId' style={{lineHeight:"1.2rem"}}>{headerTitle}</h4>    
                </div>
            </div> 
        </nav>
        
        </>
    );
}

}









    