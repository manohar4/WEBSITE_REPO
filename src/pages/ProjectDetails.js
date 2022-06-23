import React, { useEffect,useContext } from 'react'
import './../App.css'
import './../css/Global.css'
import './../css/ProjectDetails.css'
// import * as FiIcons from 'react-icons/fi'
import {FetchProjectsDetails} from '../helper/Context'
import { Navigate, useParams} from 'react-router-dom'
import Prism from 'prismjs';
import './../css/prism.css';
import Header from '../components/Header'
import Plyr from 'plyr';
import '../css/plyr.css'
import { useNavigate } from "react-router-dom";



export default function ProjectDetails() {
    window.scrollTo(0,0);
    const {projectsDetailsData} = useContext(FetchProjectsDetails);
    const { id } = useParams();
    const back = true;
    const navigation = useNavigate()
  



    useEffect(()=>{
        // eslint-disable-next-line
        const players = Array.from(document.querySelectorAll('.js-player')).map((p) => new Plyr(p));
        Prism.highlightAll();
        if(window.innerWidth<1024){
            document.getElementsByClassName('projectDetails')[0].style.marginLeft='0px';
        }
    },
    // eslint-disable-next-line
    [])
    
    if(projectsDetailsData.length!==0){

        const fitlerProjectarray = projectsDetailsData.filter(function (el){ return el.fields.project_Id.toString() ===  id});

        if(!fitlerProjectarray[0]){
            navigation("/PageNotFound");
        }
       
        else{
            var project= fitlerProjectarray[0].fields;
            var projectTitle = project.project_title;
        }
        
        
      
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
                                return (<h1 key={index} style={{marginBottom:" 1rem",marginTop: "1rem"}}>{item.elementData}</h1>);
                            }
                            else if(item.elementType === 'h2'){
                                return (<h2 key={index} style={{marginBottom:" 1rem",marginTop: "1rem"}} >{item.elementData}</h2>);
                            }
                            else if(item.elementType === 'h3'){
                                return (<h3 key={index} style={{marginBottom:" 1rem",marginTop: "1rem"}} >{item.elementData}</h3>);
                            }
                            else if(item.elementType === 'p'){
                                return (<p key={index} style={{marginBottom:" 1rem",marginTop: "1rem"}} >{item.elementData}</p>);
                            }
                            else if(item.elementType === 'coverImg'){
                                return (
                                <figure key={index}>
                                <img style={{height:item.elementHeight? item.elementHeight :"100%",width:item.elementWidth? item.elementWidth :"100%",objectFit: "cover",borderRadius:"4px",marginBottom:'0.5rem'}}  src={item.elementData} alt="Project Details" ></img>
                                <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: item.elementCaption?"":"none"}}><cite>{item.elementCaption}</cite></figcaption>
                                </figure>);
                            }
                            else if(item.elementType === 'img'){
                                return (
                                <figure key={index}>
                                    <img style={{height:item.elementHeight? item.elementHeight :"24rem",width:item.elementWidth? item.elementWidth :"100%",objectFit: "cover",borderRadius:"4px",marginBottom:'0.5rem'}}  src={item.elementData} alt="Project Details" ></img>
                                    <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: item.elementCaption?"":"none"}}><cite>{item.elementCaption}</cite></figcaption>
                                </figure>);
                            }
                            else if(item.elementType === 'video'){
                                return (
                                // <figure>
                                //     <video style={{height:item.elementHeight? item.elementHeight :"24rem",width:item.elementWidth? item.elementWidth :"100%",  display:"flex" , margin: "auto",marginTop: "1rem", marginBottom: "1rem",border:"2px solid #ffffff60",borderRadius:"8px",objectFit: "cover"}} controls="controls" src={item.elementData} />
                                //     <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: item.elementCaption?"":"none"}}><cite>{item.elementCaption}</cite></figcaption>

                                // </figure>
                                <figure key={index} style={{boxShadow: "8px 8px #ff7744f0"}}>
                                        <video className="js-player" style={{height:item.elementHeight? item.elementHeight :"24rem",width:item.elementWidth? item.elementWidth :"100%",  display:"flex" , margin: "auto",objectFit: "cover"}} crossorigin playsinline  > <source src={item.elementData} type='video/mp4'></source></video>
                                     <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: item.elementCaption?"":"none"}}><cite>{item.elementCaption}</cite></figcaption>

                                 </figure>

                                );
                            }
                            else if(item.elementType === 'divider'){
                                return (<hr key={index} className="solid"/>);
                            }
                            else if(item.elementType === '...'){
                                return (<div key={index} style={{display:"flex",justifyContent:"space-evenly"}}><hr style={{border: "0px",opacity: "60%",content:"...",color:"white",letterSpacing: "1rem",marginLeft: "1rem"}} className="solid dot"/></div>);
                            }
                            else if(item.elementType === 'spacer_small'){
                                return (<div key={index} style={{opacity:"0%"}}><hr className="solid" /></div>);
                            }
                            else if(item.elementType === 'spacer_medium'){
                                return (<div key={index} style={{opacity:"0%"}}><hr className="solid" /><hr className="solid" /></div>);
                            }
                            else if(item.elementType === 'spacer_large'){
                                return (<div key={index} style={{opacity:"0%"}}><hr className="solid" /><hr className="solid" /><hr className="solid" /></div>);
                            }
                            else if(item.elementType === 'blockQuote'){
                                return (<blockquote key={index} style={{margin:"0.6rem 0px"}}>❝ {item.elementData} ❞ </blockquote>)
                            } 
                            else if(item.elementType === 'callout'){
                                return (
                                 
                                        <div key={index} style={{display:"flex",backgroundColor:"#ffffff20",padding:"1rem",borderRadius:"4px",justifyContent:"flex-start",alignItems:"center",gap:"4px"}}>
                                            <span style={{fontSize:"16px"}}role="img">
                                              {String.fromCodePoint(item.elementEmoji) }
                                            </span>
                                            <p>{item.elementData}</p>
                                        </div>


                                )
                            }
                            else if(item.elementType === 'bulletList'){
                                return (
                                    <ul key={index} style={{margin:"1rem 0rem",listStyleType: "square",listStylePosition: "inside"}}>
                                          {item.elementData.map((item,index)=>{
                                              return( <li key={index} style={{ fontSize:"16px",fontWeight:400,color:"#ffffffd0", margin: "0.4rem 0px"}}>{item}</li>)
                                          })}
                                    </ul>
                                )
                            }
                            else if(item.elementType === 'numberList'){
                                return (
                                    <ol key={index} style={{margin:"1rem 0rem",listStylePosition: "inside"}}>
                                          {item.elementData.map((item,index)=>{
                                              return( <li key={index} style={{ fontSize:"16px",fontWeight:400,color:"#ffffffd0", margin: "0.4rem 0px"}}>{item}</li>)
                                          })}
                                    </ol>
                                )
                            }
                            else if(item.elementType === 'code'){
                                return (<pre key={index} ><code className='language-css' >{item.elementData}</code></pre>)
                            }
                            else if(item.elementType === 'highlighter'){
                                return (<span key={index} style={{backgroundColor:"#FFFF00"}}>{item.elementData}</span>)
                            }
                            else if(item.elementType === 'button'){
                                return (
                                <button key={index} className='primaryBtn' onClick={()=>{window.open(item.elementLink)}} >
                                    {item.elementData}
                                </button>       
                                )
                            }
                           
                            return "";
                        }): ""}
                    </div>
                </div>
            </div>
      </div>
  ) 
}
