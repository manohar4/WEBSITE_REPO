import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { SideBarData } from './SideBarData';
import './Navbar.css';
import bgMusicImage from "../assets/bgMusicImage.png"
import * as IoIcons from 'react-icons/io5';
import Rain from '../assets/BGMUSIC/Rain.mp3'


export default function Navbar() {

const[play,setPlay]=useState(true)


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
    console.log();
    if(selectionPath ===''){
        setSelectedChild(0);
    }
    else if(selectionPath ==='works' || selectionPath ==='ProjectDetails' || selectionPath ==='projectDetails'  ){
        setSelectedChild(1);
    }
    else if(selectionPath === 'writings'|| selectionPath ==='writingDetails' || selectionPath ==='WritingDetails'){
        setSelectedChild(2);
    }
    else if(selectionPath === 'otherActivities'){
        setSelectedChild(3);
    }
    else{
        setSelectedChild(0);
    }

},[])


const onPlayClick=()=>{
    setPlay(!play);
    var audio = document.getElementById("audio");
    audio.volume = 0.2;

    if(play){
        document.getElementsByClassName("albumCover")[0].style.animationPlayState="running";
        audio.play();
    }
    else{
         document.getElementsByClassName("albumCover")[0].style.animationPlayState="paused";
         audio.pause();
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
                <a style={{display:"unset"}} href="https://www.manoharmanu.in"><img style={{width:"1.6rem",height:"1.6rem",borderRadius:"4px"}} src="https://dl.airtable.com/.attachmentThumbnails/8b23df7c5c7e9046e9787b82c5200b75/0394af73" alt="My Notion Avatar"></img></a>
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
                <div style={{display:"flex",backgroundColor:"#ffffff20",height:"3.5rem",margin:"0rem 0.5rem",borderRadius:"0.5rem", backdropFilter: "blur(5px)",justifyContent: "space-evenly"}}>
                    <div>
                        <img className='albumCover' style={{borderRadius:"10rem",bottom:"1.5rem",width:"4rem",height:"4rem",position:"relative"}}  src={bgMusicImage} alt="cover pic"></img>
                        <audio id="audio" src={Rain}></audio>
                    </div>
                    <div style={{borderRadius:"4px",display:"flex",justifyContent:"space-between",alignItems:"center",color:"white"}}>

                        <IoIcons.IoPlayBack  className="musicIcon"/>
                        <IoIcons.IoPlayForward className="musicIcon"/>
                        <div style={{alignItems: "center", display: "flex"}}>
                               {
                               [1].map(()=>{
                                    if(play){
                                        return(
                                        <IoIcons.IoPlay className="musicIcon" onClick={onPlayClick}/>     
                                        )
                                        }  
                                    else{
                                        return(
                                        <IoIcons.IoStop className="musicIcon" onClick={onPlayClick}/>   
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
