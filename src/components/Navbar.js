import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { SideBarData } from './SideBarData';
import './Navbar.css';
import LogoAvatar from '../assets/logoAvatar.png'
import RainPic from "../assets/BGMUSIC/albumCovers/Rain.png"
import WavesPic from "../assets/BGMUSIC/albumCovers/Waves.png"
import ForestPic from "../assets/BGMUSIC/albumCovers/Forest.png"
import CloudsPic from "../assets/BGMUSIC/albumCovers/Clouds.png"
import * as IoIcons from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa';
import Rain from '../assets/BGMUSIC/Rain.mp3'
import Waves from '../assets/BGMUSIC/Waves.mp3'
import Forest from '../assets/BGMUSIC/Forest.mp3'
import Clouds from '../assets/BGMUSIC/Clouds.mp3'

var audioCount =0;

export default function Navbar() {

const[bgMusicImage,setBgMusicImage] = useState(RainPic)
const[play,setPlay]=useState(true);
const[disabled,setDisabled]= useState(true)


var audiosList = [Rain,Waves,Forest,Clouds];
var audio = document.getElementById("audio");



var smallerDeviceCheck;
    if(window.innerWidth<1024){
        smallerDeviceCheck= true;
        
    }
    else{
        smallerDeviceCheck= false;
    }



const [selectedChild,setSelectedChild]=  useState();




useEffect(()=>{

    var selectionPath = document.location.pathname.split("/")[1];
    if(selectionPath ===''){
        setSelectedChild(0);
    }
    else if(selectionPath ==='works' || selectionPath ==='ProjectDetails' || selectionPath ==='projectDetails'  ){
        setSelectedChild(1);
    }
    else if(selectionPath === 'writings'|| selectionPath ==='writingDetails' || selectionPath ==='WritingDetails'){
        setSelectedChild(2);
    }
    else if(selectionPath === 'otherActivities' || selectionPath === 'DesignLibrary'){
        setSelectedChild(3);
    }
    else if(selectionPath === 'littleThings' || selectionPath === 'LittleThings'){
        setSelectedChild(4);
    }
    else{
        setSelectedChild(0);
    }

},[])


const onPlayClick=()=>{
   
    setPlay(!play);
    audio.volume = 0.4;

    if(play){
        setDisabled(false);
        document.getElementsByClassName("albumCover")[0].style.animationPlayState="running";
        audio.play();
    }
    else{
        setDisabled(true);
         document.getElementsByClassName("albumCover")[0].style.animationPlayState="paused";
         audio.pause();
    }
}

const onPlayNext=()=>{
    
    audioCount++;
    if(audioCount === audiosList.length){
       
        audioCount =0;
    }
    audio.src = audiosList[audioCount];
    audio.play();

    audioCount === 0? setBgMusicImage(RainPic): audioCount === 1?setBgMusicImage(WavesPic):audioCount === 2? setBgMusicImage(ForestPic):setBgMusicImage(CloudsPic);

}

const onPlayBack=()=>{
    audioCount--;
    if(audioCount<0){
        audioCount =audiosList.length-1;
    }
    audio.src = audiosList[audioCount];
    audio.play();
    audioCount === 0? setBgMusicImage(RainPic): audioCount === 1?setBgMusicImage(WavesPic):audioCount === 2? setBgMusicImage(ForestPic):setBgMusicImage(CloudsPic);
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
    return (
        <>
        
            <nav className={'nav-menu'}>
                <div className='logo'>
                <a style={{display:"unset"}} href="https://www.manoharmanu.in"><img style={{width:"1.6rem",height:"1.6rem",borderRadius:"4px"}} src={LogoAvatar} alt="My Notion Avatar"></img></a>
                    <h3>Manohar Manu</h3>
                    
                </div>
                <ul className='nav-menu-items'>
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
                </ul>
                <div style={{display:"flex",backgroundColor:"var(--text-color3)",height:"3.5rem",margin:"0rem 0.5rem",borderRadius:"0.5rem", backdropFilter: "blur(5px)",justifyContent: "space-evenly"}}>
             
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
                   
                </div>
            </nav>
          
        </>
      )
}
  
}
