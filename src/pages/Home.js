import React, { useEffect,useState } from 'react'
import { Helmet } from "react-helmet";
import './../App.css'
import './../css/Home.css'
import './../css/Global.css'
import Location_DarkMode from'../assets/Location_DarkMode.png';
import Location_LightMode from'../assets/Location_LightMode.png';
import yale from '../assets/Certifications/yale.png';
import IDF from '../assets/Certifications/idf.jpeg';
import IITG from '../assets/Certifications/IITG.png';
import NITDGP from '../assets/Certifications/NITDGP.png';
import Agile from '../assets/Certifications/Agile.png';
import Vitech from '../assets/Certifications/vitech.jpg';
import Incture from '../assets/Certifications/Incture.jpeg';
import Persistent from '../assets/Certifications/Persistent.png';
import  Aos from 'aos';
import 'aos/dist/aos.css';


import Header from '../components/Header';
import * as GiIcons from 'react-icons/gi';

import * as FaIcons from 'react-icons/fa';
import handlight from '../assets/handsLight.png';
import SubmitFrom from '../components/submitForm';
import FullImage from '../components/FullImage';


export default function Home() {
    const back=false;
    const [isOpen, setIsOpen] = useState(false);
    const [isImgeOpen, setIsImgeOpen] = useState(false);
    const [imgSrc,setImgSrc] = useState("");
    const [location,setLocation] = useState(Location_DarkMode);
    const [darkChecked,setDarkChecked]= useState(false);

    useEffect(()=>{
        Aos.init({duration:1600,once:true});
    },[]);
    

    const togglePopup = () => {

        if(!isOpen){
            document.getElementsByTagName("body")[0].style.overflowY = "hidden"
        }
        else{
            document.getElementsByTagName("body")[0].style.overflowY = ""
        }
       
        setIsOpen(!isOpen);
      }

    const toggleFullImagePopup = (event) => {

        if(!isImgeOpen){
            document.getElementsByTagName("body")[0].style.overflowY = "hidden"
        }
        else{
            document.getElementsByTagName("body")[0].style.overflowY = ""
        }
        
        setImgSrc(event.target.src);
        setIsImgeOpen(!isImgeOpen);
      }


      
   

    useEffect(()=>{

        if(document.documentElement.getAttribute('data-theme') === 'light'){
            setDarkChecked(true);
        }
        
        window.scrollTo(0, 0);
        if(window.innerWidth<1024){
            document.getElementsByClassName('home')[0].style.marginLeft='0px';
        }
        if(window.innerWidth<560){
            const desgPeriodArray = document.getElementsByClassName('desgPeriod');
           
            for (var i = 0, len = desgPeriodArray.length; i < len; i++) {
                desgPeriodArray[i].style.flexDirection='column';
                desgPeriodArray[i].style.gap='0px';
            }
        }


        // if(document.documentElement.getAttribute('data-theme') === 'light'){

        //     setLocation(Location_LightMode);

        //     document.getElementsByClassName("toggleMode")[0].innerHTML = "Dark Mode: 0FF"
        //  }
        //  else{
        //     setLocation(Location_DarkMode);

        //     document.getElementsByClassName("toggleMode")[0].innerHTML = "Dark Mode: 0N"
        //  }

    },[])


function darkify(event) {

    
if(document.documentElement.getAttribute('data-theme') === 'light'){
    document.documentElement.setAttribute('data-theme', "");
    setLocation(Location_DarkMode);
    setDarkChecked(false);

    event.target.title = "Dark"
    event.target.innerHTML = "Dark Mode: ON"

 }
 else{

    document.documentElement.setAttribute('data-theme', "light");
    setLocation(Location_LightMode);
    setDarkChecked(true);
    event.target.title = "Light"
    event.target.innerHTML = "Dark Mode: OFF"
 }
  
}




 

    

  return (
    <div className='home'>
    <Helmet>
        <title>Manohar Manu</title>
        <meta name="description" content="Hey, I'm Manohar. I'm a User Experience designer based out in Bangalore, India | manoharmanu"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name="keywords" content="manoharmanu,manoharmanu.in,manu,manohar,manohar ui/ux,manoharmanu ui/ux,ui/ux designer in bagalore,ui/ux,ui/ux designer,ui/ux developer,ui/ux architect,ui/ux artist,ui/ux analyst,ui/ux app design,about ui/ux developer,all about ui/ux design,best ui ux design,best ui ux designer,cv ui ux designer,ui/ux designer job description" />

    </Helmet>
        
        <div className='col'>
            <div className='row'>
            <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>

            <Header back={back} backTo="/" headerTitle={
                                                            <div style={{width:"100%",display:"flex",justifyContent: "space-between"}}>
                                                                
                                                                <p style={{fontSize:'18px',fontWeight:'700',color:'var( --text-color0)',padding:"0.5rem 0rem"}}>Manohar Manu</p>                
                                                                <div style={{transform:"scale(0.8)"}}>
                                                                    <div className="button b2" id="button-18">
                                                                        <input onClick={(event)=>{darkify(event)}}  type="checkbox" className="checkbox" checked = {darkChecked} />
                                                                    <div className="knobs">
                                                                        <span></span>
                                                                    </div>
                                                                        <div className="layer"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }></Header>         
                            
                          

                    
                <div data-aos="fade-up" className='intro'>   
                    <p >Hey, I'm Manohar. I'm a  <span className='highlighter'> UX and interface designer</span> based out of Bangalore, India.</p>
                    <p>With five years of experience in the field, I've honed my skills in designing enterprise products, leading design teams, and building B2B applications on  <span className='highlighter'> SAP</span>. My expertise extends to a variety of industries, including manufacturing, ecommerce, and more. Currently, I'm a part of the design team at  <a className='link' target='_blank' rel="noreferrer" href='http://agilesolutions.com/'> Agile Solutions</a> where I continue to drive successful design projects.</p>
                    <div style={{display:"flex",gap:"1rem",marginTop:"1rem"}}>
                         <a rel="noreferrer" className='link' href="mailto:manoharmanu4444@gmail.com" target="_blank">
                            <button  style={{margin:"0"}} className='fillBtn'> <FaIcons.FaHandshake className='backIcon'/>Get In Touch</button>
                        </a>
                        <button style={{margin:"0"}} className='primaryBtn'   onClick={togglePopup} >  <GiIcons.GiHand className='backIcon'/>Say Hello</button>
                        
                    </div>
                </div>

                <div data-aos="fade-up"  data-aos-offset="200" className="overview" style={{gap:"0.5rem",padding:"1rem",backgroundColor:"var(--text-color8)",borderRadius:"0.5rem",marginBottom:"2rem"}}>
                    <div className='pastExpereince' style={{marginBottom:'0px'}}>
                        <h6 className='subTitle'>EXPERIENCES (6+ Years)</h6>
                        <div className='experience-row'>
                        <div className='expereince-lineitems'>
                                <img className="CertLogo" src={Persistent} alt="Brand Logo"/>
                                <a className='link' target='_blank' rel="noreferrer" href='https://www.persistent.com/' >Persistent Systems (Bangalore) </a>
                                <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                                <div className="desgPeriod">
                                    <h4 style={{textAlign:'right'}} >UX Lead</h4>
                                    <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2024&#8212; &#160;&#160;</p>
                                </div>

                            </div>
                        <div className='expereince-lineitems'>
                                <img className="CertLogo" src={Vitech} alt="Brand Logo"/>
                                <a className='link' target='_blank' rel="noreferrer" href='https://www.vitechinc.com/' >Vitech Systems (Hyderabad) </a>
                                <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                                <div className="desgPeriod">
                                    <h4 style={{textAlign:'right'}} >Sr. Designer</h4>
                                    <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2023&#8212;'23</p>
                                </div>
                                

                            </div>
                            <div className='expereince-lineitems'>
                                <img className="CertLogo" src={Agile} alt="Brand Logo"/>
                                <a className='link' target='_blank' rel="noreferrer" href='http://agilesolutions.com/' >Agile Solutions (Brazil/India) </a>
                                <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                                <div className="desgPeriod">
                                    <h4 style={{textAlign:'right'}} >Sr. Designer</h4>
                                    <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2021&#8212;'23</p>
                                </div>
                                

                            </div>
                            {/* <div className='expereince-lineitems'>
                                <a className='link' target='_blank' rel="noreferrer" href='http://agilesolutions.com/' >Agile Solutions (Brazil) </a>
                                <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                                <div className="desgPeriod">
                                    <h4 style={{textAlign:'right'}} >Designer</h4>
                                    <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2021Feb &#8212;'21Jun</p>
                                </div>
                            
                            </div> */}
                            <div className='expereince-lineitems' >
                                <img className="CertLogo" src={Incture} alt="Brand Logo"/>
                                <a className='link' target='_blank' rel="noreferrer" href='https://incture.com/' >Incture (Bangalore)</a>
                                <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                                <div className="desgPeriod">
                                    <h4 style={{textAlign:'right'}} >Designer</h4>
                                    <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2018&#8212;'21</p>
                                </div>
                                
                            </div>
                        
                            {/* <div className='expereince-lineitems' >
                                <img className="CertLogo" src={Brisky} alt="Brand Logo"/>
                                <h4 >Gleefie, Brisky(Interships) </h4>
                                <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                                <div className="desgPeriod">
                                    <h4 style={{textAlign:'right'}} >Graphic/UI Designer</h4>
                                    <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}}>2017&#8212;'17</p>
                                </div>
                                
                            </div> */}

                        </div>
                    </div>
                    
                   
                </div>
                
                <div data-aos="fade-up"  data-aos-offset="300" className="overview " style={{gap:"0.5rem",padding:"1rem",backgroundColor:"var(--text-color8)",borderRadius:"0.5rem",marginBottom:"2rem"}}>
                   
                <div className='pastExpereince' style={{marginBottom:'0px'}}>
                    <h6 className='subTitle'>EDUCATION & CERTIFICATIONS</h6>
                    <div className='experience-row'>
                        
                        <div className='expereince-lineitems'>
                        <img className="CertLogo" src={IITG} alt="Brand Logo"/>
                            <a className='link' target='_blank' rel="noreferrer"  href='https://www.coursera.org/certificates/ux-design-human-computer-interaction-iitguwahati' >PG Certification in UX Design & HCI</a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} > IIT Guhawati</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2022&#8212;'23</p>
                            </div>
                        </div>
                       
                        <div className='expereince-lineitems'>
                        <img className="CertLogo" src={NITDGP} alt="Brand Logo"/>
                            <h4>Bachelors in Mechanical Engineering </h4>
                            
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >NIT Durgapur</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2013&#8212;'17</p>
                            </div>
                        </div>

                        {/* <div className='expereince-lineitems'>
                           
                            <br></br>
                            <div style={{flexGrow:0.2,opacity:"20%",borderBottom:'dotted 2px var(--text-color3)'}}></div>
                            <br></br>
                        </div> */}

                        <div className='expereince-lineitems'>
                            
                            <img className="CertLogo" src={yale} alt="Brand Logo"/>
                            <a className='link' target='_blank' rel="noreferrer"  href='                            https://coursera.org/share/f1db3a7cb5b3d1231b140b019d9610fc' >Introduction to Psychology Course</a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Yale University (Coursera)</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2023&#8212;'23</p>
                            </div>
                        </div>

                        <div className='expereince-lineitems'>
                        <img className="CertLogo" src={IDF} alt="Brand Logo"/>
                            <a className='link' target='_blank' rel="noreferrer" href='https://www.interaction-design.org/members/manohar/certificate/course/fltqnHSHvRvNKv6ZS2' >Usability Testing In UX Design</a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Interaction Design Foundation(IxDF)</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2019&#8212;'19</p>
                            </div>
                        </div>
                    </div>
                </div>

                   
                </div> 

                <div data-aos="fade-up"  data-aos-offset="400" className='location'>
                <h6 className='subTitle'>FROM WHERE</h6>
                <div className='location-row'>
                <img src={location} onClick={(event)=>{toggleFullImagePopup(event)}}  className='locationImg' alt="Vizag Location" ></img>
                <p style={{textAlign:'right'}}> Visakhapatnam, India</p>

                </div>
                </div>

                <div data-aos="fade-up" className='socialMedia'>
                    <h6 className='subTitle'>SOCIAL MEDIA</h6>
                    <div className='social-row'>
                        <div className='social-lineitems'>
                            <h4 >Dribbble </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                            <a className='link' target='_blank' rel="noreferrer" href='https://dribbble.com/manoharmanu'>Follow</a>

                        </div>
                        <div className='social-lineitems'>
                        <h4 >Behance </h4>
                           <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                            <a className='link' target='_blank' rel="noreferrer" href='https://www.behance.net/manoharmande31'>Follow</a>
                        </div>
                        <div className='social-lineitems' >
                            <h4 >Twitter </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                            <a target='_blank' rel="noreferrer" href="https://twitter.com/manoharmanu4444?ref_src=twsrc%5Etfw" className="twitter-follow-button link" data-show-count="false">Follow</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </div>
                        <div className='social-lineitems'>
                            <h4 >Linkedin </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                            <a target='_blank' rel="noreferrer" className='link' href='https://www.linkedin.com/in/manoharmanu4444/'>Connect</a>
                        </div>
                        <div className='social-lineitems'>
                            <h4 >Email </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
               
                                       <a rel="noreferrer" className='link' href="mailto:manoharmanu4444@gmail.com" target="_blank">Get In Touch</a>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="blockquote-wrapper">
  <div className="blockquote">
    
  <div style={{display:"flex",backgroundColor:"var(--text-color3)",padding:"1rem",borderRadius:"4px",justifyContent:"flex-start",alignItems:"center",gap:"4px"}}>
                                            <span style={{fontSize:"24px"}}role="img">
                                              {String.fromCodePoint(0x1F344)}
                                            </span>
                                            <p>
    "People don't use <span  >products</span>  because of  <span  >great design</span> ; <span  > Great designs</span> makes them to use the  <span  >Product</span>"
     </p>
     
                                             </div>
                                        
    
  </div>
                    </div>

                <div id="splineFlex" style={{display:"flex",flexDirection:"row",borderRadius:"1rem"}}>
                <img  style={{flex:"1",width:"50%",height:"50%",padding:"10%",marginLeft:"10%"}} src={handlight} alt="korean Love symbol"></img>
                
                
                <div style={{flex:"2",display:"flex",alignItems:"center"}}>
                <button className='fillBtn'   onClick={togglePopup} >  <GiIcons.GiHand className='backIcon'/>Say Hello</button>

                </div>

                </div>

            
                
      
            </div> 
        </div>
        {isOpen && <SubmitFrom handleClose={togglePopup}/>}
        {isImgeOpen && <FullImage handleClose={toggleFullImagePopup} imgSrc={imgSrc}/>}
    </div>
  )
}
