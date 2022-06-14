import React, { useEffect, useState } from 'react'
import './../App.css'
import './../css/Works.css'
import './../css/Global.css'
import list from '../data/projects.json'
import location from'../assets/location.png';
import {Link,useLocation} from 'react-router-dom'

 function Works() {

   useEffect(()=>{
    if(window.innerWidth<1024){
        document.getElementsByClassName('works')[0].style.marginLeft='0px';
    }
},[])

  return (
    < div className = 'works' > 
      <div className='col'>
            <div className='row'>

            <p style={{opacity:"0",position:"relative"}} >----------------------------------------------------------------------------------------------------------------------</p>


                <div className='projectsList'>
                  
                {list.map((item,index)=>{
                  return(
                    <div>
                    <h6 style={{marginBottom:"1rem"}}>{list[index].projectGroupName}</h6>
                    <ul className='projectsItems'>
                        {item.projectsDetails.map((item,index)=>{
                            return(
                                <li key={index} >
                                    <Link to={`/ProjectDetails/${item.project_Id}`}>
                                    <div className='card'>
                                        <div style={{display:'flex',flexDirection:'column',flex:2,justifyContent:"space-between",height:'100%'}}>
                                          <div>
                                            <p style={{marginBottom:"0.5rem",fontSize:"12px"}}>{item.Project_Duraction}</p>
                                            <p style={{marginBottom:"0.5rem",fontSize:"20px",color:"#fff",width:"100%", wordBreak: "break-all"}}>{item.project_Name}</p>
                                          </div>
                                          <div style={{display:"flex",flexDirection:'row',gap:"8px"}}>
                                              {item.Project_Tags.map((item,index) => {
                                                return(
                                                  <p style={{marginBottom:"0.5rem",fontSize:"10px",border:"1px solid #ffffff50", paddingLeft:'4px',paddingRight:'4px',borderRadius:'4px'}}>{item}</p>
                                                )
                                              })}    
                                          </div>
                                        </div>
                                        <div style={{flex:1,display:"flex",justifyContent:'flex-end'}} >
                                        <img  style={{height:"100%",width:"100%",objectFit: "cover",borderRadius:"4px"}} src={item.Project_Image} alt="image" />
                                        </div>
                                    </div>
                                    </Link>
                                   
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                  )
                })}
            
                   

                 


                </div>
            </div>
        </div>
    </div >
  )
}
export default Works;