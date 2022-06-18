import React, { useEffect,useContext } from 'react'
import './../App.css'
import './../css/Global.css'
import './../css/ProjectDetails.css'
// import * as FiIcons from 'react-icons/fi'
import {FetchProjectsDetails} from '../helper/Context'
import { useParams} from 'react-router-dom'
import Prism from 'prismjs';
import './../css/prism.css';
import Header from '../components/Header'


export default function ProjectDetails() {
    window.scrollTo(0,0);
    const {projectsDetailsData} = useContext(FetchProjectsDetails);
    const { id } = useParams();
    const back = true;

    useEffect(()=>{
    
        Prism.highlightAll();
        if(window.innerWidth<1024){
            document.getElementsByClassName('projectDetails')[0].style.marginLeft='0px';
        }
    },
    // eslint-disable-next-line
    [])
    
    if(projectsDetailsData.length!==0){
        const fitlerProjectarray = projectsDetailsData.filter(function (el){ return el.fields.project_Id.toString() ===  id});
        var project= fitlerProjectarray[0].fields;
        var projectTitle = project.project_title;
    }
   
  
 

  return (
      <div className='projectDetails'>
            <div className='col'>
                <div className='row'>
                    <p style={{opacity:"0",position:"relative"}} >----------------------------------------------------------------------------------------------------------------------</p>
                    <div style={{alignItems:"center"}}>
                    <Header back={back} backTo="/works" headerTitle={<h2> {projectTitle}</h2>}></Header> 

                        { 
                        project ? project.ProjectDetails.map((item,index)=>{

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
                                return (<img style={{height:"24rem",width:"100%",objectFit: "cover",borderRadius:"4px",marginBottom:'0.5rem'}}  src={item.elementData} alt="Project Details" ></img>);
                            }
                            else if(item.elementType === 'video'){
                                return (<video style={{  display:"flex" , margin: "auto",marginTop: "1rem", marginBottom: "1rem",border:"2px solid #ffffffd0",borderRadius:"8px",height:"24rem",objectFit: "cover",width:"100%"}} controls="controls" src={item.elementData} />)
                            }
                            else if(item.elementType === 'divider'){
                                return (<hr className="solid"/>);
                            }
                            else if(item.elementType === 'spacer_small'){
                                return (<div style={{opacity:"0%"}}><hr className="solid" /></div>);
                            }
                            else if(item.elementType === 'spacer_medium'){
                                return (<div style={{opacity:"0%"}}><hr className="solid" /><hr className="solid" /></div>);
                            }
                            else if(item.elementType === 'spacer_large'){
                                return (<div style={{opacity:"0%"}}><hr className="solid" /><hr className="solid" /><hr className="solid" /></div>);
                            }
                            else if(item.elementType === 'blockQuote'){
                                return (<blockquote>❝ {item.elementData} ❞ </blockquote>)
                            }
                            else if(item.elementType === 'bulletList'){
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
                            else if(item.elementType === 'highlighter'){
                                return (<span style={{backgroundColor:"#FFFF00"}}>{item.elementData}</span>)
                            }
                           
                            return "";
                        }): ""}
                    </div>
                </div>
            </div>
      </div>
  ) 
}
