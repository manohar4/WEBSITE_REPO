import React, { useEffect,useContext } from 'react'
import { Helmet } from "react-helmet";
import './../App.css'
import './../css/Works.css'
import './../css/Global.css'
// import list from '../data/projects.json'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import {FetchProjectsList} from '../helper/Context'

import LightGrid from '../components/LightGallery'
import { FetchAllAttachements } from '../helper/Context';

import  Aos from 'aos';
import 'aos/dist/aos.css';


var shotData=[];
var entered = true;

function Works() {


  useEffect(()=>{
    Aos.init({duration:1600,once:true});
},[]);


  const {allAttachements} = useContext(FetchAllAttachements);
  //Adding Skectes data into an array

  if(allAttachements.length!==0){
      if(entered){
      entered=false;
    
      for(var j=0;j<= allAttachements[3].fields.Attachments.length-1;j++){
        shotData.push(allAttachements[3].fields.Attachments[j].url);
      }
  }
  }

  // const GROUP2 = [
  //   "https://images.unsplash.com/photo-1594818898109-44704fb548f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  //   "https://images.unsplash.com/photo-1594818896795-35ad7bcf3c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  //   "https://images.unsplash.com/photo-1594818896744-57eca4d47b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  //   "https://images.unsplash.com/photo-1594818897077-aec41f55241f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
  //   "https://images.unsplash.com/photo-1594818896744-57eca4d47b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  // ];

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
        <meta name="keywords" content="manoharmanu,manoharmanu.in,manu,manohar,manohar ui/ux,manoharmanu ui/ux,ui/ux designer in bagalore,ui/ux,ui/ux designer,ui/ux developer,ui/ux architect,ui/ux artist,ui/ux analyst,ui/ux app design,about ui/ux developer,all about ui/ux design,best ui ux design,best ui ux designer,cv ui ux designer,ui/ux designer job description" />

    </Helmet>
      <div className='col'>
            <div className='row'>


            <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
            <Header back={back} backTo="/"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'var( --text-color0)',padding:"0.5rem 0rem"}}>Works</p>}></Header>

                <div className='projectsList'>
                  
                {projectsListData.map((item,index)=>{
                  return(
                    <div key={index}>
                    <h6 style={{marginBottom:"0.5rem"}}>{projectsListData[index].projectGroupName}</h6>
                    <ul data-aos="fade-up" className='projectsItems'>
                        {item.projectsDetails.map((item,index)=>{
                            return(
                           
                                <li key={index} className="cardGroup" >
                                    <Link to={`/ProjectDetails/${item.project_Id}`}>
                                    <div className='card'>
                                        <div style={{display:'flex',flexDirection:'column',flex:2,justifyContent:"space-between",height:'100%'}}>
                                          <div>
                                            <p style={{marginBottom:"0.5rem",fontSize:"12px"}}>{item.Project_Duraction}</p>
                                            <p style={{marginBottom:"0.5rem",fontSize:"20px",color:"var( --text-color0)",width:"100%",height: "auto", wordBreak: "break-all" }}>{item.project_Name}</p>
                                          </div>
                                          <div style={{display:"flex",flexDirection:'row',gap:"8px"}}>
                                              {item.Project_Tags.map((item,index) => {
                                                return(
                                                  <p key={index} style={{marginBottom:"0.5rem",fontSize:"10px",border:"1px solid var(--text-color3)", paddingLeft:'4px',paddingRight:'4px',borderRadius:'0.5rem'}}>{item}</p>
                                                )
                                              })}    
                                          </div>
                                        </div>
                                        <div style={{flex:1,display:"flex",justifyContent:'flex-end'}} >
                                        {/* <img  style={{height:"100%",width:"100%",objectFit: "cover",borderRadius:"4px"}} src={item.Project_Image} alt="Project_Cover" /> */}
                                        <img key={index} style={{height:"100%",width:"100%",objectFit: "cover",borderRadius:"4px"}} src={item.Project_Image[0].url} alt="Project_Cover" />

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

                <div >
                  <h6 style={{marginBottom:"1rem"}}>FEW SNAPSHOTS OF MY WORK</h6>
                

                    <LightGrid key="lightGRIDID" elementData={shotData}  ></LightGrid>
                  </div>

                  <div style={{marginTop:"4rem",textAlign:"center"}}>
            <p style={{marginBottom:"0.5rem"}}>that's it</p>
            <svg width="125" height="17" viewBox="0 0 125 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.99999 8.31634C10.2957 0.983039 23.3769 0.983037 31.6726 8.31634C41.8853 17.0653 55 15.3989 62.0828 8.31634C71 -0.600851 84.1441 1.35869 92.1241 8.31634C100.569 15.6791 114.555 15.6791 123 8.31634"  className="ender" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>   
          
                  
            </div>
        </div>
    </div>
  )
}
export default Works;