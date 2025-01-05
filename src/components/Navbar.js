import React, { use, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { SideBarData } from './SideBarData';
import './Navbar.css';
import LogoAvatar from '../assets/logoAvatar.png'
import RainPic from "../assets/BGMUSIC/albumCovers/Rain.png"
import WavesPic from "../assets/BGMUSIC/albumCovers/Waves.png"
import ForestPic from "../assets/BGMUSIC/albumCovers/Forest.png"
import CloudsPic from "../assets/BGMUSIC/albumCovers/Clouds.png"
import * as IoIcons from 'react-icons/io5';
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";
import * as FaIcons from 'react-icons/fa';
import Rain from '../assets/BGMUSIC/Rain.mp3'
import Waves from '../assets/BGMUSIC/Waves.mp3'
import Forest from '../assets/BGMUSIC/Forest.mp3'
import Clouds from '../assets/BGMUSIC/Clouds.mp3'
import { update } from 'react-spring';

var audioCount =0;

export default function Navbar() {

const[bgMusicImage,setBgMusicImage] = useState(RainPic)
const[play,setPlay]=useState(true);
const[disabled,setDisabled]= useState(true);
const[darkChecked,setDarkChecked] = useState(false);


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
    else if(selectionPath === 'littleThings' || selectionPath === 'LittleThings'){
        updateNavSelection(4);
        setSelectedChild(4);
       
    }
    else if(selectionPath === 'OtherActivities' || selectionPath === 'DesignLibrary'){
        updateNavSelection(5);
        setSelectedChild(5);
    }
    else{
        updateNavSelection(1);
        setSelectedChild(1);
    }


    function updateNavSelection(index){
        //setting default selected nav item - selected
           const PILL = document.querySelector('#pill');
           const MENU_LINKS = document.querySelectorAll('.item');
           const MENULINKSPARENT = document.querySelector('#items');
   
           const dimensions = MENU_LINKS[index-1].getBoundingClientRect();
               PILL.style.width = dimensions.width+ 'px';
               PILL.style.height = 36 + 'px';
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

},[])





// const onPlayClick=()=>{
   
//     setPlay(!play);
//     audio.volume = 0.4;

//     if(play){
//         setDisabled(false);
//         document.getElementsByClassName("albumCover")[0].style.animationPlayState="running";
//         audio.play();
//     }
//     else{
//         setDisabled(true);
//          document.getElementsByClassName("albumCover")[0].style.animationPlayState="paused";
//          audio.pause();
//     }
// }


function darkify(event) {



const ripple = document.querySelector('.ripple');
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
        document.documentElement.setAttribute('data-theme','');
    event.target.title = 'Dark';
    }, 500);
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
    }, 500);

    setDarkChecked(true);
   
    }


}

// const onPlayNext=()=>{
    
//     audioCount++;
//     if(audioCount === audiosList.length){
       
//         audioCount =0;
//     }
//     audio.src = audiosList[audioCount];
//     audio.play();

//     audioCount === 0? setBgMusicImage(RainPic): audioCount === 1?setBgMusicImage(WavesPic):audioCount === 2? setBgMusicImage(ForestPic):setBgMusicImage(CloudsPic);

// }

// const onPlayBack=()=>{
//     audioCount--;
//     if(audioCount<0){
//         audioCount =audiosList.length-1;
//     }
//     audio.src = audiosList[audioCount];
//     audio.play();
//     audioCount === 0? setBgMusicImage(RainPic): audioCount === 1?setBgMusicImage(WavesPic):audioCount === 2? setBgMusicImage(ForestPic):setBgMusicImage(CloudsPic);
// }


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
                                    <Link  to={item.path} onClick={event =>changeStyle(event,index)}>
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
        <nav className={'nav-menu'}>
            <div className='logo'>
                <a style={{display:"unset"}} href="https://www.manoharmanu.in"><img style={{width:"1.6rem",height:"1.6rem",borderRadius:"4px"}} src={LogoAvatar} alt="My Notion Avatar"></img></a>
                <h3>Manohar Manu</h3>    
            </div>
            {/* <ul className='nav-menu-items'>
                {SideBarData.map((item,index)=>{
                    const changeStyle = (event,index) => {
                        setSelectedChild(index);
                    };
                    return(
                        <li key={index} className={ index === selectedChild ?item.selectedCName:item.cName}>
                            <Link  to={item.path}  onClick={event =>changeStyle(event,index)}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul> */}
                
            {/* <div style={{display:"flex",backgroundColor:"var(--text-color3)",height:"3.5rem",margin:"0rem 0.5rem",borderRadius:"0.5rem", backdropFilter: "blur(5px)",justifyContent: "space-evenly"}}>
                <div style={{position:"relative"}}>
                
                    <img className='albumCover' style={{borderRadius:"10rem",bottom:"1.5rem",width:"4rem",height:"4rem",position:"relative"}}  src={bgMusicImage} alt="cover pic"></img>
                    <audio id="audio" src={Rain} loop></audio>
                    <div style={{ width:"100%",position:"absolute",zIndex:"1",top:"0px",fontSize:"12px",color:"var( --text-color0)",textAlign:"center"}}><FaIcons.FaHeadphones style={{fontSize:"14px"}} title="Use Headphones For better Expereince"></FaIcons.FaHeadphones></div>

                </div>
                <div style={{borderRadius:"4px",display:"flex",justifyContent:"space-between",alignItems:"center",color:"var(--text-color0)"}}>

                    <IoIcons.IoPlayBack    style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}   className="musicIcon" onClick={onPlayBack}/>
                    <IoIcons.IoPlayForward  style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}  className="musicIcon" onClick={onPlayNext}/>
                    <div style={{alignItems: "center", display: "flex"}}>
                        {
                        [1].map((item,index)=>{
                                if(play){
                                    return(
                                    <IoIcons.IoPlay key={index} className="musicIcon" onClick={onPlayClick}/>     
                                    )
                                    }  
                                else{
                                    return(
                                    <IoIcons.IoStop key={index} className="musicIcon" onClick={onPlayClick}/>   
                                    )  
                                }
                            } 
                        
                        )}
                    </div>
                    
                </div>
            </div> */}
            <div id="menu" className='nav-menu'>
                <div class="content">
                    <div id="pill"></div>
                    <div id="items" className='nav-menu-items' >
                        { SideBarData.map((item,index)=>{

                            const changeStyle = (event,index) => {
                             
                                setSelectedChild(index+1);
                                const PILL = document.querySelector('#pill');
                                const MENU_LINKS = document.querySelectorAll('.item');
                                const MENULINKSPARENT = document.querySelector('#items');
                                const dimensions = event.target.parentElement.getBoundingClientRect();
                                PILL.style.width = 24+  dimensions.width+ 'px';
                                PILL.style.height = 36 + 'px';
                                PILL.style.top = 2.5 + 'px';
                                PILL.style.left = dimensions.left -12 -MENULINKSPARENT.getBoundingClientRect().left + 'px';
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
                            };

                            return(
                                <li key={index} className={`item`}>

                                    <Link  to={item.path}  onClick={event =>changeStyle(event,index)}  >

                                        {item.icon}

                                        <span>{item.title}</span>

                                    </Link>

                                </li>
                            )

                        })} 
                    </div>
                </div>
            </div>

            {/* <div style={{flex:1, display:"flex", paddingRight: "1rem"}}>
                <div className="button b2" style={{marginRight:"unset"}} id="button-18">

                    <input id="darkToggle" onClick={(event)=>{darkify(event)}}  type="checkbox" className="checkbox" checked = {darkChecked} />

                <div className="knobs">

                    <span></span>

                </div>

                    <div className="layer"></div>

                </div>
            </div> */}

            <div style={{flex:1, display:"flex", paddingRight: "1rem", alignItems:"center",justifyContent:"end"}}
                         type="checkbox" checked = {darkChecked}
                        onClick={(event)=>{darkify(event)}} 
                    >

                <div className="icon-container">

                <RiLightbulbFlashFill id='bulbonID'
                            className="backIcon bulbIcon" 
                            style={{ display:"none", color: "#ff7744f0",transform: `scale(1.2)`,marginLeft:"auto"}}
                            />

                            <RiLightbulbFlashLine id='bulboffID'
                            className="backIcon bulbIcon" 
                            style={{ color: "#fff",transform: `scale(1.2)`,marginLeft:"auto"}}
                            />
                </div>
         
                </div>
        </nav>
        </>
    );
}

}









    