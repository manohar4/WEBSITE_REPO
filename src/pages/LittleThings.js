import React, { useEffect,useContext } from 'react'
import { Helmet } from "react-helmet";
import './../App.css'
import './../css/Writings.css'
import './../css/Global.css'
import {Link} from 'react-router-dom'
import * as FiIcons from 'react-icons/fi'
// import data from '../data/writings.json'
import {FetchLittleThings} from '../helper/Context'
import Header from '../components/Header'
import Carousel from '../components/Carousel'

var emojiString,emojiOutput;
 function LittleThings() {

  const back= false; 

  const {littleThingsData} = useContext(FetchLittleThings);
  console.log(littleThingsData);
  useEffect(()=>{
    window.scrollTo(0, 0);
    if(window.innerWidth<1024){
        document.getElementsByClassName('writings')[0].style.marginLeft='0px';
    }
},[])
    
  return (
    <div className='writings'>
      <Helmet>
        <title>Little Things | Manohar Manu</title>
        <meta name="description" content="Articles, blogs - I write about design, UX UI, and Product Design, Visual Designs, best Practices in UX and UI, User Research and many more"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name="keywords" content="manoharmanu,manoharmanu.in,manu,manohar,manohar ui/ux,manoharmanu ui/ux,ui/ux designer in bagalore,ui/ux,ui/ux designer,ui/ux developer,ui/ux architect,ui/ux artist,ui/ux analyst,ui/ux app design,about ui/ux developer,all about ui/ux design,best ui ux design,best ui ux designer,cv ui ux designer,ui/ux designer job description" />

    </Helmet>
    <div className='col'>
        <div className='row'>
        <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
        <Header back={back} backTo="/"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'var( --text-color0)',padding:"0.5rem 0rem"}}>Little Things</p>}></Header>

        <p style={{marginBottom:"2rem"}}>These are curated collection of the finer details of designs, observations, products and many more that I encounter on daily basis.</p>

        {

        littleThingsData ? littleThingsData.map((item,index)=>{
          return(
          <div  className='littleThingsCard'>
              <h3>{item.fields.Name}</h3>
              
              {
                ["1"].map((value,index)=>{
                  var caroData=[];
                  if(item.fields.AttachmentType === "Image"){
                    return(
                      <div style={{maxHeight:"600px",textAlign:"center"}} >
                    <img style={{maxWidth:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}} src={item.fields.Attachments[0].url}></img>
                    </div>
                    )
                  }
                  else if(item.fields.AttachmentType === "Video"){
                     return(
                    <div style={{paddingTop: "50%", position: "relative",overflow: "hidden"}}><iframe frameBorder="0" allowFullScreen="" scrolling="no" allow="autoplay;fullscreen" src={item.fields.VideoUrl} style={{position: "absolute",height: "100%",width: "100%",left: "0px",top: "0px"}}></iframe></div>
                    )
                  }
                  else if(item.fields.AttachmentType === "Carousel"){
                    for(var i=0;i<=item.fields.Attachments.length-1;i++){
                      caroData.push(item.fields.Attachments[i].url);
                  }
                    return(
                      <Carousel elementData={caroData} elementWidth="100%" elementHeight="auto" ></Carousel>
                      )
                  }
                    
                })
            
            }
              <p>{item.fields.Description}</p>
              <h6 style={{fontSize:"14px"}}>Courtesy: {item.fields.Courtesy}</h6>
              <h6 style={{fontSize:"14px"}}>Upload Date: {item.fields.CreatedDate}</h6>
              
          </div>

        )}): ""
        
        }

                        
        
                        
        
        


            
        </div>
    </div>
</div>
  )
}
export default LittleThings;