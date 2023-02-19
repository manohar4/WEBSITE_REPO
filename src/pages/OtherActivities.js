import React,{useContext, useEffect,useState} from 'react'
import { Helmet } from "react-helmet";
import './../App.css'
import './../css/OtherActivities.css'
import './../css/Global.css'
import Header from '../components/Header'
import Testimonials from '../components/Testimonials'
import * as TbIcons from 'react-icons/tb'
import * as IoIcons from 'react-icons/io5';


import CustomCursor from "../assets/tools/Sketch.png"

import Animation_1 from './../assets/animationsGif/1.gif'
import Animation_2 from './../assets/animationsGif/2.gif'
import Animation_3 from './../assets/animationsGif/3.gif'
import Animation_4 from './../assets/animationsGif/4.gif'
import Animation_5 from './../assets/animationsGif/5.gif'
import Animation_6 from './../assets/animationsGif/6.gif'
import Animation_7 from './../assets/animationsGif/7.gif'
import Animation_8 from './../assets/animationsGif/8.gif'
import Animation_9 from './../assets/animationsGif/9.gif'
import Animation_10 from './../assets/animationsGif/10.gif'
import Animation_11 from './../assets/animationsGif/11.gif'
import Animation_12 from './../assets/animationsGif/12.gif'
import Animation_13 from './../assets/animationsGif/13.gif'
import Carousel from '../components/Carousel'
import { useNavigate } from "react-router-dom";
import { FetchAllAttachements } from '../helper/Context';

var sketchData =[];
var testimonData=[];
var entered = true;

 function OtherActivities() {


    const allAnimations=[Animation_1,Animation_2,Animation_3,Animation_4,Animation_5,Animation_6,Animation_7,Animation_8,Animation_9,Animation_10,Animation_11,Animation_12,Animation_13]

    
    const {allAttachements,allTools} = useContext(FetchAllAttachements);
    //Adding Skectes data into an array

    if(allAttachements.length!==0){
        if(entered){
        entered=false;
      
        for(var i=0;i<= allAttachements[1].fields.Attachments.length-1;i++){
            sketchData.push({"elementUrl":allAttachements[1].fields.Attachments[i].url,"elementCaption":""});
        }

        for(var j=0;j<= allAttachements[2].fields.Attachments.length-1;j++){
            testimonData.push(allAttachements[2].fields.Attachments[j].url);
        }
    }
    }


       

    //
    // var testimonData =[] 

    // 


    window.prevAnimoji =1;

    const navigation = useNavigate();
    const[randomNum,setRandomNum]= useState(9);
    const[gif,setGif] = useState(Animation_9)
    const[showMore,setShowMore]= useState(false)

  window.currentAnimoji = 9;
  window.previousArray = [];
  window.startLoop = true;

  const back = false;
  useEffect(()=>{
        window.scrollTo(0, 0);
  
    if(window.innerWidth<1024){
        document.getElementsByClassName('dummyGif')[0].style.marginLeft="-100vw";
        document.getElementsByClassName('otherActivities')[0].style.marginLeft='0px';
        document.getElementsByClassName('animationFlex')[0].style.flexDirection='column';
        document.getElementsByClassName('animationFlex')[0].style.gap='2rem';        
      }
},
 // eslint-disable-next-line
[])

const onAnimationClick =()=>{


    
    window.currentAnimoji =Math.floor(Math.random() * (12))+1;



    setRandomNum(window.currentAnimoji);

    if(window.currentAnimoji === 1){
        setGif(Animation_1)
    }
    else if(window.currentAnimoji === 2){
        setGif(Animation_2)
    }
    else if(window.currentAnimoji === 3){
        setGif(Animation_3)
    }
    else if(window.currentAnimoji === 4){
        setGif(Animation_4)
    }
    else if(window.currentAnimoji === 5){
        setGif(Animation_5)
    }
    else if(window.currentAnimoji === 6){
        setGif(Animation_6)
    }
    else if(window.currentAnimoji === 7){
        setGif(Animation_7)
    }
    else if(window.currentAnimoji === 8){
        setGif(Animation_8)
    }
    else if(window.currentAnimoji === 9){
        setGif(Animation_9)
    }
    else if(window.currentAnimoji === 10){
        setGif(Animation_10)
    }
    else if(window.currentAnimoji === 11){
        setGif(Animation_11)
    }
    else if(window.currentAnimoji === 12){
        setGif(Animation_12)
    }
    else if(window.currentAnimoji === 13){
        setGif(Animation_13)
    }
}

const openDesignLibrary=()=>{
    navigation("/DesignLibrary");
}

const onShowMore=(e)=>{
    if(showMore === false){ 
        setShowMore(true);
        e.target.innerHTML = "Show Less"
    }
    if(showMore === true){ 
        setShowMore(false);
        e.target.innerHTML = "Show More"
    }
}

  return (
    < div className = 'otherActivities'> 
    <Helmet>
        <title>More | Manohar Manu</title>
        <meta name="description" content="Know More about myself and some Testimonials"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name="keywords" content="manoharmanu,manoharmanu.in,manu,manohar,manohar ui/ux,manoharmanu ui/ux,ui/ux designer in bagalore,ui/ux,ui/ux designer,ui/ux developer,ui/ux architect,ui/ux artist,ui/ux analyst,ui/ux app design,about ui/ux developer,all about ui/ux design,best ui ux design,best ui ux designer,cv ui ux designer,ui/ux designer job description" />

    </Helmet>
    <div className='col'>
            <div className='row'>

            <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
            <Header back={back} backTo="/"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'var( --text-color0)',padding:"0.5rem 0rem"}}>More Details</p>}></Header>
            
            <button className='resourcesButton' onClick={openDesignLibrary} > Check Out My Design Bookmarks <IoIcons.IoArrowForwardCircle  style={{fontSize:"2rem"}}/>  </button>
            
            <div className='tools'>
                    <h6 className='subTitle'>TOOLS I'M FAMILIAR WITH</h6>
                    <div className='tool-row'>
                        {
                             allTools.slice(0, 5).map((item,index)=>{
                                return (
                                    <div key={index} className='tool-lineitems'>
                                        <img className="toolLogo" src={item.fields.ToolLogo[0].url} alt="Brand Logo"/>
                                        <h4 >{item.fields.ToolName} </h4>
                                        <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                                    <p>{item.fields.Level}</p>
                                </div>
                                )
                            })
                        }

                        {
                            showMore?allTools.map((item,index)=>{
                                if(index<5){
                                    return ""
                                }
                                else{
                                return (
                                    <div key={index} className='tool-lineitems'>
                                        <img className="toolLogo" src={item.fields.ToolLogo[0].url} alt="Brand Logo"/>
                                        <h4 >{item.fields.ToolName} </h4>
                                        <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                                    <p>{item.fields.Level}</p>
                                </div>
                                )
                                }
                            }):null
                        }
                        <button className='primaryBtn' onClick={(e)=> onShowMore(e)} >Show More</button>

                    </div>
                </div>
            
            <div  style={{opacity:"0%"}}><hr className="solid" /><hr className="solid" /></div>
            
          
            
                <h6 className='subTitle'>FEW ENDORSEMENTS</h6>
                <div style={ {marginBottom: "4rem"}}>
                <Testimonials elementData={testimonData}></Testimonials>

                </div>


            <div className='tools'>
                    <h6 className='subTitle'>PROCREATE {"&"} SKETCHES..</h6>
                   <Carousel elementData={sketchData} elementWidth="100%" elementHeight="auto" ></Carousel>
                </div>

             <div  className='animationFlex' style={{display:"flex",marginTop: "2rem",borderRadius:"1rem" ,cursor: "url(" + CustomCursor + ")"}}>

              <div className='animationGroup' style={{display:"flex",flex:"1",textAlign: "center",cursor: "pointer"}}>

                {
                    allAnimations.map((item,index)=>{
                        return (
                            <>
                               <img key={index+10000} style={{width:"100%",borderRadius:"1rem", display:index===randomNum?"block":"none"}} src={gif}  alt="emoji animation"></img>
                
                                {
                                   index===12?  <img key={index+1000} className='dummyGif' style={{width:"100%",borderRadius:"1rem",opacity:"0%",zIndex:"-100"}} src={Animation_1}  alt="emoji animation"></img>:null
                                }           

                            </>
                         )
                    })
                }
                  {/* <img style={{width:"100%",borderRadius:"1rem"}} src={gif}  alt="emoji animation"></img> */}
              </div>

              <div style={{display:"flex", flexDirection:"column",flex:"1",justifyContent:"center",textAlign:"left",gap:"0.4rem"}}>
                <h1 style={{lineHeight:"2.4rem",marginLeft:"2rem"}}> THANKS <br/> FOR  VISITING!</h1>
                <button onClick={()=> onAnimationClick()} className='fillBtn' style={{width:"auto",alignSelf:"flex-start",margin:"0rem",marginLeft:"2rem"}}> <TbIcons.TbConfetti className='backIcon'/><h3>Show Me A Move</h3></button>
              </div>
            </div>
            
            </div>
        </div>
    </div >
  )
}
export default OtherActivities;