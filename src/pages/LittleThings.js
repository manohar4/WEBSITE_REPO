import React, { useEffect,useContext ,useRef,useState} from 'react'
import { Helmet } from "react-helmet";
import './../App.css'
import './../css/Writings.css'
import './../css/Global.css'
//import Plyr from 'plyr';
import '../css/plyr.css'
import Prism from 'prismjs';
import './../css/prism.css';
// import data from '../data/writings.json'
import {FetchLittleThings} from '../helper/Context'
import Header from '../components/Header'
import Carousel from '../components/Carousel'

 function LittleThings() {

  const back= false; 

  const {littleThingsData} = useContext(FetchLittleThings);


// Create refs for each detail card
const detailRefs = useRef([]);


const [selectedIndex, setSelectedIndex] = useState(0);


useEffect(() => {

  //const players = Array.from(document.querySelectorAll('.js-player')).map((p) => new Plyr(p));
  Prism.highlightAll();

  window.scrollTo(0, 0);
  if(window.innerWidth<1024){
      document.getElementsByClassName('writings')[0].style.marginLeft='0px';
      document.getElementsByClassName('littleCardList')[0].style.display='none';
      document.getElementsByClassName('littleCardDetails')[0].style.maxWidth='100%';
      document.getElementsByClassName('littleCardDetails')[0].style.marginLeft='0%';
     }



  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = detailRefs.current.indexOf(entry.target);
          setSelectedIndex(index); // Update active index when a section is in view
        }
      });
    },
    { threshold: 0.6 } // Trigger when 60% of a section is visible
  );

  // Observe all sections
  detailRefs.current.forEach((section) => {
    if (section) observer.observe(section);
  });

  // Cleanup observer on component unmount
  return () => observer.disconnect();
}, []);

  const handleCardClick = (index) => {
    if (detailRefs.current[index]) {
      const element = detailRefs.current[index];
  const offset = 75; // Define the offset

  // Calculate the position of the element and subtract the offset
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  // Smooth scroll to the calculated position
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
    }
    setSelectedIndex(index); // Update the selected index
  };


    
  return (
    <div className='writings'>
      <Helmet>
        <title>Little Things | Manohar Manu</title>
        <meta name="description" content="Articles, blogs - I write about design, UX UI, and Product Design, Visual Designs, best Practices in UX and UI, User Research and many more"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name="keywords" content="manoharmanu,manoharmanu.in,manu,manohar,manohar ui/ux,manoharmanu ui/ux,ui/ux designer in bagalore,ui/ux,ui/ux designer,ui/ux developer,ui/ux architect,ui/ux artist,ui/ux analyst,ui/ux app design,about ui/ux developer,all about ui/ux design,best ui ux design,best ui ux designer,cv ui ux designer,ui/ux designer job description" />

    </Helmet>
    <div className='col' style={{marginBottom:"0px"}}>
        <div className='row'>
        <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
        <Header back={back} backTo="/"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'var( --text-color0)',padding:"0.5rem 0rem"}}>Little Things</p>}></Header>

        <p style={{marginBottom:"2rem"}}>This is a curated collection of the finest details in designs, noteworthy observations, exceptional products insights, and other interesting things that I encounter on a daily basis.</p>


        {/* card view */}
        {/* <div className='littlethings-card-grid' >
        {
      
          littleThingsData ? littleThingsData.map((item,index)=>{
            return(
              <>             
                      {
                    ["1"].map((value,index)=>{
                      return(

                        <li key={index} className="littlethings-cardGroup"  onClick={togglePopup()} >
                            <div className='littlethings-card'>
                              <image style={{width:"100%",aspectRatio:"1",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem"}} src={item.fields.Attachments[0].url} alt="Reference Pic"></image>
                                  <div className='littlethings-card-body'>
                                    <h4 style={{marginBottom:"0.4rem", height:"3.2rem"}}>{item.fields.Name}</h4>
                                    <div class="description-container">
                                      <p class="description">
                                          {item.fields.Description}
                                      </p>
                                  </div>
                                  
                                  </div>
                            </div>
                        </li>
                     
                    )
                    })
                  }
              </>
            );
          }): ""
          }
        </div> */}


                <div class="littleCardList">
                        {
                          littleThingsData ? littleThingsData.map((item,index)=>{
                            return(
                              <div key={index} className={`littleCardTitle ${selectedIndex === index ? "selected" : ""}`}
                              onClick={() => handleCardClick(index)} >
                               
                               <h5>{item.fields.Name}</h5>
                              </div>
                            )
                          }):""
                        }
                
                </div>
                <div class="littleCardDetails">
                {/* <div key={index} className="littleCard" ref={(el) => (detailRefs.current[index] = el)}> */}
                  {
                        littleThingsData ? littleThingsData.map((item,index)=>{
                          return(
                          
                            <div  className='littleCard littleThingsCard' ref={(el) => (detailRefs.current[index] = el)}>
              <h3>{item.fields.Name}</h3>
              
              {
                ["1"].map((value,index)=>{
                  var caroData=[];
                  if(item.fields.AttachmentType === "Image"){
                    return(
                      <div style={{maxHeight:"600px",textAlign:"center"}} >
                    <img style={{maxWidth:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}} src={item.fields.Attachments[0].url} alt="Reference Pic"></img>
                    </div>
                    )
                  }
                  else if(item.fields.AttachmentType === "Video"){
                     return(

                      <figure key={index} style={{borderRadius:"0.5rem"}}>
                                        <video className="js-player" style={{height:item.elementHeight? item.elementHeight :"24rem",width:item.elementWidth? item.elementWidth :"100%",  display:"flex" , margin: "auto",objectFit: "cover"}} crossorigin playsinline  > <source src={item.fields.Attachments[0].url} type='video/mp4'></source></video>
                                     <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: item.elementCaptions?"":"none"}}><cite>{item.fields.elementCaptions}</cite></figcaption>
                                 </figure>

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
                  else {
                    return null;
                  }
                    
                })
            
            }
              <p>{item.fields.Description}</p>
              <div style={{marginTop:"1rem"}}>
                 <h6 style={{fontSize:"14px",float:"left"}}>Courtesy: {item.fields.Courtesy}</h6>
                 <h6 style={{fontSize:"14px",float:"right"}}>Upload Date: {item.fields.CreatedDate}</h6>
              </div>
              
              
          </div>



                          
                          )
                        }):""
                  }
                     </div>
        </div>
       
        

{/* 
        {

        littleThingsData ? littleThingsData.map((item,index)=>{
          return(
          <div  className='littleThingsCard' style={{}}>
              <h3>{item.fields.Name}</h3>
              
              {
                ["1"].map((value,index)=>{
                  var caroData=[];
                  if(item.fields.AttachmentType === "Image"){
                    return(
                      <div style={{maxHeight:"600px",textAlign:"center"}} >
                    <image style={{maxWidth:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}} src={item.fields.Attachments[0].url} alt="Reference Pic"></image>
                    </div>
                    )
                  }
                  else if(item.fields.AttachmentType === "Video"){
                     return(

                      <figure key={index} style={{borderRadius:"0.5rem"}}>
                                        <video className="js-player" style={{height:item.elementHeight? item.elementHeight :"24rem",width:item.elementWidth? item.elementWidth :"100%",  display:"flex" , margin: "auto",objectFit: "cover"}} crossorigin playsinline  > <source src={item.fields.Attachments[0].url} type='video/mp4'></source></video>
                                     <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: item.elementCaptions?"":"none"}}><cite>{item.fields.elementCaptions}</cite></figcaption>
                                 </figure>

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
                  else {
                    return null;
                  }
                    
                })
            
            }
              <p>{item.fields.Description}</p>
              <div style={{marginTop:"1rem"}}>
                 <h6 style={{fontSize:"14px",float:"left"}}>Courtesy: {item.fields.Courtesy}</h6>
                 <h6 style={{fontSize:"14px",float:"right"}}>Upload Date: {item.fields.CreatedDate}</h6>
              </div>
              
              
          </div>

        )}): ""
        
        } */}


          {/* <div style={{marginTop:"4rem",textAlign:"center"}}>
            <p style={{marginBottom:"0.5rem"}}>that's it</p>
            <svg width="125" height="17" viewBox="0 0 125 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.99999 8.31634C10.2957 0.983039 23.3769 0.983037 31.6726 8.31634C41.8853 17.0653 55 15.3989 62.0828 8.31634C71 -0.600851 84.1441 1.35869 92.1241 8.31634C100.569 15.6791 114.555 15.6791 123 8.31634"  className="ender" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>    */}


        </div>
    </div>

  )
}
export default LittleThings;