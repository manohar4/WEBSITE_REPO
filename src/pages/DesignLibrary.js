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
   

        return (
            <div className='DesignLibrary'>
                <div className='col' style={{overflowX:"hidden"}}>
                    <div className='row' style={{overflowX:"hidden"}}>
                        <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
                        <Header back={back} backTo="/OtherActivities"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'var( --text-color0)',padding:"0.5rem 0rem"}}>Design Bookmarks</p>}></Header>
                        
                        <div style={{display:"flex", flexDirection:"column",gap:"2px"}}>
                            <div style={{display:"flex",flexDirection:"row", padding:"1rem",flex:"1",position:"sticky",height: "0rem", backgroundColor:"var(--bg-color7)", gap:"0.2rem",borderRadius:"1rem 1rem 0rem 0rem"}} >
                                    {
                                    designLibraryData.map((item,index)=>{
                                        return(
                                            <button className={index === selectCount? selected: "tabButton" } onClick={(event)=>{ onTabClick(event) }} data-order={item.order}  >{item.catergory.split(". ")[1]}</button>
                                        )}
                                    )}
                            </div>
                            <div className="grid" style={{display:"grid", padding:"1rem", flex:"4", borderRadius:"0rem 0rem 1rem 1rem", backgroundColor:"var(--bg-color7)"}} >
                            {
                                designLibraryData.length>0 ? designLibraryData[currentSelection].Items.map((item,index)=>{                
                                        return(
                                            <div className='cardLib' onClick={()=> item.Link ? window.open(item.Link):null }>
                                                <div style={{aspectRatio: "1",height:"100%"}}>
                                                    
                                                    <img style={{width:"100%",height:"100%",objectFit:"contain",borderRadius: "0.3rem" }} src={item.Attachments[0].url}  alt="resource logo"></img>
                                                </div>
                                                <div   style={{width:"100%"}}>
                                                    
                                                    <h4 className='ItemName' style={{color: "var(--text-color0)"}}>{item.ItemName}<span className='myFav' style={{fontSize:"10px",opacity: item.Favourite? "1":"0"}}>{item.Favourite}</span></h4>
                                                    <p style={{fontSize:"12px"}} className='ItemName'>{item.Description}</p>
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

