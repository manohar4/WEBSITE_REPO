import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import { SideBarData } from './SideBarData';
import './Navbar.css';
import * as FiIcons from 'react-icons/fi'

export default function Navbar() {


var smallerDeviceCheck;
    if(window.innerWidth<1024){
        smallerDeviceCheck= true;
        
    }
    else{
        smallerDeviceCheck= false;
    }



const [selectedChild,setSelectedChild]=  useState(0);

var location = document.location;


useEffect(()=>{
    
    if(location.pathname ==='/works'){
        console.log(selectedChild);
        setSelectedChild(1);
        console.log('works')
    }
    else if(location.pathname === '/writings'){
        console.log(selectedChild);
        console.log("Writings")
        setSelectedChild(2);
    }
    else if(location.pathname === '/otherActivities'){
        console.log(selectedChild);
        setSelectedChild(3);
        console.log('other Activities');

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
                <Link style={{display:"none"}} to='/'><FiIcons.FiMenu/></Link>
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
