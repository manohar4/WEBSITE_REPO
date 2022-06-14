import React, { useEffect } from 'react'
import './../App.css'
import './../css/Global.css'
import './../css/ProjectDetails.css'
import * as FiIcons from 'react-icons/fi'
import data from '../data/projectDetails.json'
import {Link, useParams} from 'react-router-dom'
import Prism from 'prismjs';
import './../css/prism.css';


export default function ProjectDetails() {

    useEffect(()=>{
        Prism.highlightAll();
    })

    const { id } = useParams();
    
    
    const fitlerProjectarray = data.filter(function (el){return el.projectId ==  id});
    const project= fitlerProjectarray[0];
   useEffect(()=>{
    if(window.innerWidth<1024){
        document.getElementsByClassName('projectDetails')[0].style.marginLeft='0px';
    }
},[])

  return (
      <div className='projectDetails'>
            <div className='col'>
                <div className='row'>
                    <p style={{opacity:"0",position:"relative"}} >----------------------------------------------------------------------------------------------------------------------</p>
                    <div style={{alignItems:"center"}}>
                        <Link to="/Works">
                            <button className='backButton'  >
                                <FiIcons.FiArrowLeftCircle className='backIcon'/><p>Back</p>
                            </button>       
                        </Link>   

                        {project.ProjectDetails.map((item,index)=>{

                            if(item.elementType === 'h1'){
                                return (<h1 style={{marginBottom:" 1rem",marginTop: "1rem"}}>{item.elementData}</h1>);
                            }
                            else if(item.elementType === 'h2'){
                                return (<h2 style={{marginBottom:" 1rem",marginTop: "1rem"}} >{item.elementData}</h2>);
                            }
                            else if(item.elementType === 'h3'){
                                return (<h3 style={{marginBottom:" 1rem",marginTop: "1rem"}} >{item.elementData}</h3>);
                            }
                            else if(item.elementType === 'p'){
                                return (<p style={{marginBottom:" 1rem",marginTop: "1rem"}} >{item.elementData}</p>);
                            }
                        
                            else if(item.elementType === 'img'){
                                return (<img style={{height:"24rem",width:"100%",objectFit: "cover",borderRadius:"4px",marginBottom:'0.5rem'}}  src={require("../assets/projectAssets/project"+project.projectId+"/" + item.elementData + ".png")} alt="Project Details" ></img>);
                            }
                            else if(item.elementType === 'video'){
                                return (<video style={{  display:"flex" , margin: "auto",marginTop: "1rem", marginBottom: "1rem",border:"2px solid #ffffffd0",borderRadius:"8px",height:"24rem",objectFit: "cover",width:"100%"}} controls="controls" src={require("../assets/projectAssets/project"+project.projectId+"/" + item.elementData + ".mp4")} />)
                            }
                            else if(item.elementType === 'divider'){
                                return (<hr className="solid"/>);
                            }
                            else if(item.elementType === 'spacer'){
                                return (<div style={{opacity:"0%"}}><hr className="solid" /></div>);
                            }
                            else if(item.elementType === 'blockQuote'){
                                return (<blockquote>❝ {item.elementData} ❞ </blockquote>)
                            }
                            else if(item.elementType === 'buttletList'){
                                return (
                                    <ul style={{margin:"1rem 0rem",listStyleType: "square",listStylePosition: "inside"}}>
                                          {item.elementData.map((item,index)=>{
                                              return( <li style={{ fontSize:"16px",fontWeight:400,color:"#ffffffd0", margin: "0.4rem 0px"}}>{item}</li>)
                                          })}
                                    </ul>
                                )
                            }
                            else if(item.elementType === 'numberList'){
                                return (
                                    <ol style={{margin:"1rem 0rem",listStylePosition: "inside"}}>
                                          {item.elementData.map((item,index)=>{
                                              return( <li style={{ fontSize:"16px",fontWeight:400,color:"#ffffffd0", margin: "0.4rem 0px"}}>{item}</li>)
                                          })}
                                    </ol>
                                )
                            }
                            else if(item.elementType === 'code'){
                                return (<pre><code className='language-css' >{item.elementData}</code></pre>)
                            }
                           
                            return "";
                        })}
                    </div>
                </div>
            </div>
      </div>
  ) 
}
