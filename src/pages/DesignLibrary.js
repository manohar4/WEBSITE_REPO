import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header';
import '../css/DesignLibrary.css'
import { FetchDesignLibrary } from '../helper/Context';
import * as TiIcons from 'react-icons/ti'



export default function DesignLibrary() {
    const back = true;

    const {designLibraryData} = useContext(FetchDesignLibrary);
    const[currentSelection,setCurrentSeclection]= useState(0);
    const[selected] = useState("tabButton-active")
    const[selectCount,setSelectCount] = useState(0)









    useEffect(()=>{
        
        setCurrentSeclection(0);
        if(window.innerWidth<1024){
            document.getElementsByClassName('DesignLibrary')[0].style.marginLeft='0px';
        }
    },

    // eslint-disable-next-line
    [])

    const onTabClick = (event)=>{

        debugger;
        for(var i=0;i<= designLibraryData.length-1;i++){
           designLibraryData[i][2] = "tabButton";
        }

        setSelectCount(parseInt(event.target.dataset.order, 10)-1);
        setCurrentSeclection(parseInt(event.target.dataset.order, 10)-1);

    }



  return (
    <div className='DesignLibrary'>
        <div className='col'>
            <div className='row'>
                <p style={{opacity:"0",position:"relative"}} >----------------------------------------------------------------------------------------------------------------------</p>
                <Header back={back} backTo="/OtherActivities"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'#fff',padding:"0.5rem 0rem"}}>Design Library</p>}></Header>

                {/* <div style={{display:"flex",gap:"1rem",flexDirection:"column"}}>
                {designLibraryData.map((item,index)=>{
                      console.log(item);
                    return(
                      
                        <div key={index}>
                           
                                 <h3 style={{marginBottom:"0.4rem"}}>{item[0].split(".")[1]}</h3>
                                <div className="grid">        
                               
                                
                                    {
                                    
                                    item[1].map((item,index)=>{
                                        

                                        return(
                                            <div className='cardLib' onClick={()=>{ window.open(item.Link); }}>
                                                <TiIcons.TiStarFullOutline style={{ position: "absolute",fontSize: "24px",color:"#ff7744f0",opacity: item.Favourite? "1":"0",margin: "4px",stroke:"2px black solid"}} />
                                                <div style={{aspectRatio: "1",width:"100%"}}>
                                                    
                                                    <img style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"0.5rem" }} src={item.Attachments[0].url}  alt="resource logo"></img>
                                                 </div>
                                                 <div  ><p className='ItemName'>{item.ItemName}</p></div>
                                                
                                            </div>
                                           
                                        )
                                    })}
                                 </div>

                                 <hr style={{opacity:"10%"}} className="solid"/>
                        </div>
                    
                    )
                 })
                }
                </div> */}


                <div style={{display:"flex", width:"100%",padding: "1rem 0rem",gap:"1rem"}}>
                    <div style={{display:"flex",flexDirection:"column", flex:"1"}} >
                            {
                            designLibraryData.map((item,index)=>{
                                return(
                                    <button className={index === selectCount? selected: "tabButton" } onClick={(event)=>{ onTabClick(event) }} data-order={item.order}  >{item.catergory}</button>
                                )}
                            )}
                    </div>
                    <div className="grid" style={{display:"grid", flex:"4"}} >
                    {
                        designLibraryData.length>0 ? designLibraryData[currentSelection].Items.map((item,index)=>{                
                                return(
                                    <div className='cardLib' onClick={()=>{ window.open(item.Link); }}>
                                        <TiIcons.TiStarFullOutline style={{ position: "absolute",fontSize: "16px",color:"#ff7744f0",opacity: item.Favourite? "1":"0",margin: "4px",stroke:"2px black solid"}} />
                                        <div style={{aspectRatio: "1",height:"100%"}}>
                                            
                                            <img style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"0.5rem" }} src={item.Attachments[0].url}  alt="resource logo"></img>
                                        </div>
                                        <div  ><p className='ItemName'>{item.ItemName}</p></div>
                                        
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

