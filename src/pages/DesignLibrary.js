import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header';
import '../css/DesignLibrary.css'
import { FetchDesignLibrary } from '../helper/Context';


export default function DesignLibrary() {
    const back = true;

    const {designLibraryData} = useContext(FetchDesignLibrary);
    const[currentSelection,setCurrentSeclection]= useState(0);
    const[selected] = useState("tabButton-active")
    const[selectCount,setSelectCount] = useState(0)

    var smallerDeviceCheck;
    if(window.innerWidth<1024){
        smallerDeviceCheck= true;
        
    }
    else{
        smallerDeviceCheck= false;
    }

    useEffect(()=>{
        
        setCurrentSeclection(0);
        if(window.innerWidth<1024){
            document.getElementsByClassName('DesignLibrary')[0].style.marginLeft='0px';
        }
        
    },

    // eslint-disable-next-line
    [])

    const onTabClick = (event)=>{

        

        for(var i=0;i<= designLibraryData.length-1;i++){
           designLibraryData[i][2] = "tabButton";
        }

        setSelectCount(parseInt(event.target.dataset.order, 10)-1);
        setCurrentSeclection(parseInt(event.target.dataset.order, 10)-1);

    }
   
    
    


    if(smallerDeviceCheck){

        return (
            <div className='DesignLibrary'>
                <div className='col'>
                    <div className='row'>
                       <Header back={back} backTo="/OtherActivities"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'#fff',padding:"0.5rem 0rem"}}>Design Library</p>}></Header>
        
                       <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
                        <div style={{display:"flex",flexDirection:"column", width:"100%",gap:"1rem"}}>
                            <div  className="HeaderFixed" style={{display:"flex",flexDirection:"row", flex:"1",position:"sticky",top:"3rem",zIndex:"100",backgroundColor:"black",overflow:"scroll",maxWidth:"94vw"}} >
                                    {
                                    designLibraryData.map((item,index)=>{
                                        return(
                                            <button className={index === selectCount? selected: "tabButton" } onClick={(event)=>{ onTabClick(event) }} data-order={item.order}  >{item.catergory.split(". ")[1]}</button>
                                        )}
                                    )}
                            </div>
                            <div className="grid" style={{display:"grid", flex:"4"}} >
                            {
                                designLibraryData.length>0 ? designLibraryData[currentSelection].Items.map((item,index)=>{                
                                        return(
                                            <div className='cardLib' onClick={()=> item.Link ? window.open(item.Link):null }>
                                                <div style={{aspectRatio: "1",height:"100%",backgroundColor: "white",borderRadius: "0.5rem"}}>
                                                    
                                                    <img style={{width:"100%",height:"100%",objectFit:"contain",borderRadius:"0.5rem" }} src={item.Attachments[0].url}  alt="resource logo"></img>
                                                </div>
                                                <div style={{width:"100%"}}>
                                                    <h3 className='ItemName'>{item.ItemName}<span className='myFav' style={{opacity: item.Favourite? "1":"0"}}>My Fav</span></h3>
                                                    <p style={{fontSize:"14px"}} className='ItemName'>{item.Description}</p>
                                                    </div>
                                                
                                            </div>
                                        
                                        )
                                   
                                    }):""
                                            
                            }
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
          )
    }
    else{

        return (
            <div className='DesignLibrary'>
                <div className='col'>
                    <div className='row'>
                        <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
                        <Header back={back} backTo="/OtherActivities"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'#fff',padding:"0.5rem 0rem"}}>Design Library</p>}></Header>
                        
                        <div style={{display:"flex", width:"100%",gap:"1rem"}}>
                            <div style={{display:"flex",flexDirection:"column", flex:"1",position:"sticky",top:"4rem",height: "0rem"}} >
                                    {
                                    designLibraryData.map((item,index)=>{
                                        return(
                                            <button className={index === selectCount? selected: "tabButton" } onClick={(event)=>{ onTabClick(event) }} data-order={item.order}  >{item.catergory.split(". ")[1]}</button>
                                        )}
                                    )}
                            </div>
                            <div className="grid" style={{display:"grid", flex:"4"}} >
                            {
                                designLibraryData.length>0 ? designLibraryData[currentSelection].Items.map((item,index)=>{                
                                        return(
                                            <div className='cardLib' onClick={()=> item.Link ? window.open(item.Link):null }>
                                                <div style={{aspectRatio: "1",height:"100%",backgroundColor: "white", borderRadius: "0.5rem"}}>
                                                    
                                                    <img style={{width:"100%",height:"100%",objectFit:"contain",borderRadius:"0.5rem" }} src={item.Attachments[0].url}  alt="resource logo"></img>
                                                </div>
                                                <div   style={{width:"100%"}}>
                                                    <h3 className='ItemName'>{item.ItemName}<span className='myFav' style={{opacity: item.Favourite? "1":"0"}}>{item.Favourite}</span></h3>
                                                    <p style={{fontSize:"14px"}} className='ItemName'>{item.Description}</p>
                                                    </div>
                                                
                                            </div>
                                        
                                        )
                                   
                                    }):""
                                            
                            }
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
          )

    }


 
}

