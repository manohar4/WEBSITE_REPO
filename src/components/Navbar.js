import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { SideBarData } from './SideBarData';
import './Navbar.css';
export default function Navbar() {


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
            </nav>
          
        </>
      )
}
  
}
