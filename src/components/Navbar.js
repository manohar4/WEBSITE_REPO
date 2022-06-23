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
    else if(selectionPath === '/writings'|| selectionPath ==='writingDetails' || selectionPath ==='WritingDetails'){
        setSelectedChild(2);
    }
    else if(selectionPath === '/otherActivities'){
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
                <Link style={{display:"unset"}} to='/'><img style={{width:"auto",height:"100%",borderRadius:"4px"}} src="https://dl.airtable.com/.attachments/c805ad355c8129d53f61f2b8f7e9677e/490a477d/Avatar21.png" alt="My Notion Avatar"></img></Link>
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
