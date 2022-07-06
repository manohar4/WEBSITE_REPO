import React, { useEffect,useContext } from 'react'
import { Helmet } from "react-helmet";
import './../App.css'
import './../css/Works.css'
import './../css/Global.css'
// import list from '../data/projects.json'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import {FetchProjectsList} from '../helper/Context'

function Works() {

  const {projectsListData} = useContext(FetchProjectsList);
  

 useEffect(()=>{
    window.scrollTo(0, 0);
    if(window.innerWidth<1024){
        document.getElementsByClassName('works')[0].style.marginLeft='0px';
    }
},
 // eslint-disable-next-line
[])

  const back= false; 

  return (
    < div className = 'works' > 

<Helmet>
        <title>Works | Manohar Manu</title>
        <meta name="description" content="List of all my design works"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
    </Helmet>
      <div className='col'>
            <div className='row'>


            <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
            <Header back={back} backTo="/"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'#fff',padding:"0.5rem 0rem"}}>Works</p>}></Header>

                <div className='projectsList'>
                  
                {projectsListData.map((item,index)=>{
                  return(
                    <div key={index}>
                    <h6 style={{marginBottom:"0.5rem"}}>{projectsListData[index].projectGroupName}</h6>
                    <ul className='projectsItems'>
                        {item.projectsDetails.map((item,index)=>{
                            return(
                           
                                <li key={index} className="cardGroup" >
                                    <Link to={`/ProjectDetails/${item.project_Id}`}>
                                    <div className='card'>
                                        <div style={{display:'flex',flexDirection:'column',flex:2,justifyContent:"space-between",height:'100%'}}>
                                          <div>
                                            <p style={{marginBottom:"0.5rem",fontSize:"12px"}}>{item.Project_Duraction}</p>
                                            <p style={{marginBottom:"0.5rem",fontSize:"20px",color:"#fff",width:"100%",height: "auto", wordBreak: "break-all" }}>{item.project_Name}</p>
                                          </div>
                                          <div style={{display:"flex",flexDirection:'row',gap:"8px"}}>
                                              {item.Project_Tags.map((item,index) => {
                                                return(
                                                  <p key={index} style={{marginBottom:"0.5rem",fontSize:"10px",border:"1px solid #ffffff50", paddingLeft:'4px',paddingRight:'4px',borderRadius:'0.5rem'}}>{item}</p>
                                                )
                                              })}    
                                          </div>
                                        </div>
                                        <div style={{flex:1,display:"flex",justifyContent:'flex-end'}} >
                                        {/* <img  style={{height:"100%",width:"100%",objectFit: "cover",borderRadius:"4px"}} src={item.Project_Image} alt="Project_Cover" /> */}
                                        <img  style={{height:"100%",width:"100%",objectFit: "cover",borderRadius:"4px"}} src={item.Project_Image[0].url} alt="Project_Cover" />

                                        </div>
                                    </div>
                                    </Link>
                                   
                                </li>
                            )
                          })
                        }
                    </ul>
                    </div>
                  )
                })}
            
                </div>
            </div>
        </div>
    </div>
  )
}
export default Works;