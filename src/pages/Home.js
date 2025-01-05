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
    

  return (
    <div className='home'>
    <Helmet>
        <title>Manohar Manu</title>
        <meta name="description" content="Hey, I'm Manohar. I'm a User Experience designer based out in Bangalore, India | manoharmanu"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name="keywords" content="manoharmanu,manoharmanu.in,manu,manohar,manohar ui/ux,manoharmanu ui/ux,ui/ux designer in bagalore,ui/ux,ui/ux designer,ui/ux developer,ui/ux architect,ui/ux artist,ui/ux analyst,ui/ux app design,about ui/ux developer,all about ui/ux design,best ui ux design,best ui ux designer,cv ui ux designer,ui/ux designer job description" />

    </Helmet>
        <div class="blur-overlay"></div>
        
        <div className='col'>
            <div className='row'>
            <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>

            <Header back={back} backTo="/" headerTitle={
                                                            <div style={{width:"100%",display:"flex",justifyContent: "space-between"}}>
                                                                
                                                                <p style={{fontSize:'18px',fontWeight:'700',color:'var( --text-color0)',padding:"0.5rem 0rem"}}>Manohar Manu</p>                
                                                                {/* <div style={{transform:"scale(0.8)"}}>
                                                                    <div className="button b2" id="button-18">
                                                                        <input onClick={(event)=>{darkify(event)}}  type="checkbox" className="checkbox" checked = {darkChecked} />
                                                                    <div className="knobs">
                                                                        <span></span>
                                                                    </div>
                                                                        <div className="layer"></div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
             }></Header>         
                            
                          

                <div data-aos="fade-up" id="splineFlex" className='heroContainer' >
               
                    <div className='intro'>   
                        <p >Hey, I'm Manohar. I'm a  <span className='highlighter'> UX and interface designer</span> based out of Bangalore, India.</p>
                        <p>With five years of experience in the field, I've honed my skills in designing enterprise products, leading design teams, and building B2B applications on  <span className='highlighter'> SAP</span>. My expertise extends to a variety of industries, including manufacturing, ecommerce, and more. Currently, I'm a part of the design team at  <a className='link' target='_blank' rel="noreferrer" href='http://agilesolutions.com/'> Agile Solutions</a> where I continue to drive successful design projects.</p>
                    </div>
                    <img  style={{width:"200px", height:"200px"}} src={handlight} alt="korean Love symbol"></img>

                </div>

                <div data-aos="fade-up" style={{display:"flex",gap:"1rem",marginTop:"1rem", marginBottom:"3rem"}}>
                         <a rel="noreferrer" className='link' href="mailto:manoharmanu4444@gmail.com" target="_blank">
                            <button  style={{margin:"0rem",padding:"0.5rem 0.8rem",borderRadius:"2rem"}} className='fillBtn'> <FaIcons.FaHandshake className='backIcon' style={{color:'var( --text-color0)'}}/>Get In Touch</button>
                        </a>
                        <button style={{margin:"0",padding:"0.5rem 0.8rem",borderRadius:"2rem"}} className='primaryBtn'   onClick={togglePopup} >  <GiIcons.GiHand className='backIcon' style={{color:'var( --text-color0)'}}/>Say Hello</button>
                        
                </div>
               

                <div data-aos="fade-up"  data-aos-offset="200" className="overview" style={{gap:"0.5rem",padding:"1rem",backgroundColor:"var(--text-color8)",borderRadius:"0.5rem",marginBottom:"2rem"}}>
                    <div className='pastExpereince' style={{marginBottom:'0px'}}>
                        <div className='expereince-lineitems'>
                            <h6 className='subTitle'>EXPERIENCES</h6>
                            <div style={{opacity:0,flexGrow:1,borderBottom:'dotted 2px var(--text-color3)'}}></div>
                            <div className="desgPeriod">
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >6+ Years</p>
                            </div>
                        </div>
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
                    <div className='expereince-lineitems'>
                        <h6 className='subTitle'>EDUCATION & CERTIFICATIONS</h6>
                    </div>
                  
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
    "People don't use <span  >products</span>  because of  <span  >great design</span> ; <span  > great design</span> makes them to use the  <span  >product</span>"
     </p>
                                             </div>
                                        
    
  </div>
                    </div>

                {/* <div id="splineFlex" style={{display:"flex",flexDirection:"row",borderRadius:"1rem"}}>
                <img  style={{flex:"1",width:"50%",height:"50%",padding:"10%",marginLeft:"10%"}} src={handlight} alt="korean Love symbol"></img>
                
                
                <div style={{flex:"2",display:"flex",alignItems:"center"}}>
                <button className='fillBtn'   onClick={togglePopup} >  <GiIcons.GiHand className='backIcon'/>Say Hello</button>

                </div>

                </div> */}
                
                <div className='svg-container'>
                <svg width="545" height="208" viewBox="0 0 545 208" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path d="M3.35813 76C2.52277 76 2.1051 75.5823 2.1051 74.747V10.4413C2.1051 9.60595 2.52277 9.18827 3.35813 9.18827H35.1852C35.9537 9.18827 36.622 9.45559 37.19 9.99022L47.2143 20.0145C47.7489 20.5825 48.0162 21.2508 48.0162 22.0193V63.1188C48.0162 63.9208 47.7489 64.589 47.2143 65.1237L37.19 75.1479C36.622 75.716 35.9537 76 35.1852 76H3.35813ZM22.9556 55.9515H25.0607C26.4641 55.9515 27.1658 54.9992 27.1658 53.0946V32.0436C27.1658 30.1724 26.4641 29.2368 25.0607 29.2368H22.9556V55.9515ZM53.4795 76C52.6441 76 52.2264 75.5823 52.2264 74.747V10.4413C52.2264 9.60595 52.6441 9.18827 53.4795 9.18827H88.3639C89.1992 9.18827 89.6169 9.60595 89.6169 10.4413V27.9838C89.6169 28.8191 89.1992 29.2368 88.3639 29.2368H73.0769V33.3969H88.3639C89.1992 33.3969 89.6169 33.8146 89.6169 34.6499V50.5384C89.6169 51.3737 89.1992 51.7914 88.3639 51.7914H73.0769V55.9515H88.3639C89.1992 55.9515 89.6169 56.3691 89.6169 57.2045V74.747C89.6169 75.5823 89.1992 76 88.3639 76H53.4795ZM95.0841 76C94.2487 76 93.831 75.5823 93.831 74.747V60.6128C93.831 60.2118 93.8477 59.8943 93.8812 59.6604C93.948 59.3931 94.1485 59.1592 94.4826 58.9588L105.108 52.8439V50.3379L94.633 44.8245C94.0983 44.5238 93.831 44.0226 93.831 43.3209V20.7663C93.831 20.2317 93.8644 19.8474 93.9313 19.6135C93.9981 19.3462 94.232 19.0622 94.633 18.7614L107.865 9.83985C108.132 9.63936 108.416 9.489 108.717 9.38876C109.018 9.2551 109.402 9.18827 109.87 9.18827H127.563C128.398 9.18827 128.816 9.60595 128.816 10.4413V25.2772C128.816 26.0123 128.565 26.5135 128.064 26.7809L114.932 32.5448V35.1511L128.064 42.6693C128.565 42.9032 128.816 43.4378 128.816 44.2732V66.076C128.816 66.3433 128.766 66.6273 128.665 66.928C128.599 67.1954 128.431 67.4125 128.164 67.5796L112.426 75.3985C112.226 75.5322 111.975 75.6659 111.674 75.7995C111.407 75.9332 111.14 76 110.872 76H95.0841ZM134.241 76C133.406 76 132.988 75.5823 132.988 74.747V10.4413C132.988 9.60595 133.406 9.18827 134.241 9.18827H152.586C153.421 9.18827 153.839 9.60595 153.839 10.4413V74.747C153.839 75.5823 153.421 76 152.586 76H134.241ZM170.88 76C170.112 76 169.443 75.716 168.875 75.1479L158.851 65.1237C158.316 64.589 158.049 63.9208 158.049 63.1188V22.0193C158.049 21.2508 158.316 20.5825 158.851 20.0145L168.875 9.99022C169.443 9.45559 170.112 9.18827 170.88 9.18827H201.203C202.039 9.18827 202.456 9.60595 202.456 10.4413V27.9838C202.456 28.8191 202.039 29.2368 201.203 29.2368H180.604C180.136 29.2368 179.735 29.4039 179.401 29.738C179.067 30.0387 178.899 30.423 178.899 30.8908V54.2975C178.899 54.7319 179.067 55.1161 179.401 55.4503C179.735 55.7844 180.136 55.9515 180.604 55.9515H187.671V48.5335L183.511 48.4333C182.675 48.4333 182.258 48.0156 182.258 47.1802V34.6499C182.258 33.8146 182.675 33.3969 183.511 33.3969H204.812C205.648 33.3969 206.065 33.8146 206.065 34.6499V63.1188C206.065 63.9208 205.781 64.589 205.213 65.1237L195.189 75.1479C194.654 75.716 193.986 76 193.184 76H170.88ZM211.283 76C210.448 76 210.03 75.5823 210.03 74.747V10.4413C210.03 9.60595 210.448 9.18827 211.283 9.18827H243.11C243.879 9.18827 244.547 9.45559 245.115 9.99022L255.139 20.0145C255.674 20.5825 255.941 21.2508 255.941 22.0193V74.747C255.941 75.5823 255.524 76 254.688 76H236.344C235.509 76 235.091 75.5823 235.091 74.747V29.2368H230.881V74.747C230.881 75.5823 230.463 76 229.628 76H211.283ZM261.405 76C260.569 76 260.152 75.5823 260.152 74.747V10.4413C260.152 9.60595 260.569 9.18827 261.405 9.18827H296.289C297.124 9.18827 297.542 9.60595 297.542 10.4413V27.9838C297.542 28.8191 297.124 29.2368 296.289 29.2368H281.002V33.3969H296.289C297.124 33.3969 297.542 33.8146 297.542 34.6499V50.5384C297.542 51.3737 297.124 51.7914 296.289 51.7914H281.002V55.9515H296.289C297.124 55.9515 297.542 56.3691 297.542 57.2045V74.747C297.542 75.5823 297.124 76 296.289 76H261.405ZM303.009 76C302.174 76 301.756 75.5823 301.756 74.747V10.4413C301.756 9.60595 302.174 9.18827 303.009 9.18827H334.836C335.605 9.18827 336.273 9.45559 336.841 9.99022L346.865 20.0145C347.4 20.5825 347.667 21.2508 347.667 22.0193V63.1188C347.667 63.9208 347.4 64.589 346.865 65.1237L336.841 75.1479C336.273 75.716 335.605 76 334.836 76H303.009ZM322.607 55.9515H324.712C326.115 55.9515 326.817 54.9992 326.817 53.0946V32.0436C326.817 30.1724 326.115 29.2368 324.712 29.2368H322.607V55.9515ZM380.665 76C379.897 76 379.228 75.716 378.66 75.1479L368.636 65.1237C368.101 64.589 367.834 63.9208 367.834 63.1188V52.2926C367.834 51.5909 368.001 51.0897 368.335 50.789L373.999 44.173V41.0153L368.335 34.3993C368.001 34.0986 367.834 33.5974 367.834 32.8957V22.0193C367.834 21.2508 368.101 20.5825 368.636 20.0145L378.66 9.99022C379.228 9.45559 379.897 9.18827 380.665 9.18827H404.723C405.559 9.18827 405.976 9.60595 405.976 10.4413V27.9838C405.976 28.8191 405.559 29.2368 404.723 29.2368H388.685V35.0509H396.203V32.9959C396.203 32.1605 396.62 31.7429 397.456 31.7429H413.344C414.18 31.7429 414.597 32.1605 414.597 32.9959V35.0509H416.452C417.287 35.0509 417.705 35.4686 417.705 36.3039V48.8342C417.705 49.6696 417.287 50.0873 416.452 50.0873H414.597V74.747C414.597 75.5823 414.18 76 413.344 76H380.665ZM392.444 58.4575C393.881 58.4575 395.05 58.0064 395.952 57.1043C396.854 56.2021 397.305 55.0326 397.305 53.5958C397.305 52.1924 396.854 51.0396 395.952 50.1374C395.05 49.2352 393.881 48.7841 392.444 48.7841C391.04 48.7841 389.888 49.2352 388.985 50.1374C388.083 51.0396 387.632 52.1924 387.632 53.5958C387.632 55.0326 388.083 56.2021 388.985 57.1043C389.888 58.0064 391.04 58.4575 392.444 58.4575ZM19.9483 153C19.0795 153 18.4112 152.783 17.9434 152.348L12.38 146.735L2.90704 137.312C2.53948 136.944 2.30558 136.66 2.20534 136.46C2.13851 136.226 2.1051 135.842 2.1051 135.307V103.881C2.1051 103.313 2.13851 102.929 2.20534 102.728C2.30558 102.528 2.53948 102.244 2.90704 101.876L10.4252 94.2578L17.9434 86.8399C18.2442 86.5391 18.5449 86.3553 18.8456 86.2885C19.1463 86.2217 19.5139 86.1883 19.9483 86.1883H33.9823C34.8176 86.1883 35.2353 86.606 35.2353 87.4413V101.275C35.2353 101.576 35.2019 101.86 35.135 102.127C35.1016 102.361 34.9513 102.611 34.684 102.879L28.0679 109.394L22.8052 114.757V125.283L28.7195 131.297L34.684 137.112C34.9513 137.345 35.1016 137.596 35.135 137.863C35.2019 138.131 35.2353 138.415 35.2353 138.715V151.747C35.2353 152.582 34.8176 153 33.9823 153H19.9483ZM52.2335 153C51.4649 153 50.7967 152.716 50.2286 152.148L40.2044 142.124C39.6697 141.589 39.4024 140.921 39.4024 140.119V99.0193C39.4024 98.2508 39.6697 97.5825 40.2044 97.0145L50.2286 86.9902C50.7967 86.4556 51.4649 86.1883 52.2335 86.1883H72.7832C73.5852 86.1883 74.2534 86.4556 74.7881 86.9902L84.8123 97.0145C85.3804 97.5825 85.6644 98.2508 85.6644 99.0193V140.119C85.6644 140.921 85.3804 141.589 84.8123 142.124L74.7881 152.148C74.2534 152.716 73.5852 153 72.7832 153H52.2335ZM62.358 132.951H62.7088C64.0788 132.951 64.7638 131.999 64.7638 130.095V109.044C64.7638 107.172 64.0788 106.237 62.7088 106.237H62.358C60.9546 106.237 60.2529 107.172 60.2529 109.044V130.095C60.2529 131.999 60.9546 132.951 62.358 132.951ZM91.1683 153C90.333 153 89.9153 152.582 89.9153 151.747V87.4413C89.9153 86.606 90.333 86.1883 91.1683 86.1883H122.995C123.764 86.1883 124.432 86.4556 125 86.9902L135.024 97.0145C135.559 97.5825 135.826 98.2508 135.826 99.0193V140.119C135.826 140.921 135.559 141.589 135.024 142.124L125 152.148C124.432 152.716 123.764 153 122.995 153H91.1683ZM110.766 132.951H112.871C114.274 132.951 114.976 131.999 114.976 130.095V109.044C114.976 107.172 114.274 106.237 112.871 106.237H110.766V132.951ZM141.29 153C140.454 153 140.037 152.582 140.037 151.747V87.4413C140.037 86.606 140.454 86.1883 141.29 86.1883H176.174C177.009 86.1883 177.427 86.606 177.427 87.4413V104.984C177.427 105.819 177.009 106.237 176.174 106.237H160.887V110.397H176.174C177.009 110.397 177.427 110.815 177.427 111.65V127.538C177.427 128.374 177.009 128.791 176.174 128.791H160.887V132.951H176.174C177.009 132.951 177.427 133.369 177.427 134.205V151.747C177.427 152.582 177.009 153 176.174 153H141.29ZM182.894 153C182.059 153 181.641 152.582 181.641 151.747V87.4413C181.641 86.606 182.059 86.1883 182.894 86.1883H214.721C215.49 86.1883 216.158 86.4556 216.726 86.9902L226.75 97.0145C227.285 97.5825 227.552 98.2508 227.552 99.0193V140.119C227.552 140.921 227.285 141.589 226.75 142.124L216.726 152.148C216.158 152.716 215.49 153 214.721 153H182.894ZM202.492 132.951H204.597C206 132.951 206.702 131.999 206.702 130.095V109.044C206.702 107.172 206 106.237 204.597 106.237H202.492V132.951ZM260.55 153C259.782 153 259.113 152.716 258.545 152.148L248.521 142.124C247.986 141.589 247.719 140.921 247.719 140.119V99.1196C247.719 98.2842 248.137 97.8665 248.972 97.8665H264.811C265.646 97.8665 266.064 98.2842 266.064 99.1196V134.605H270.274V99.1196C270.274 98.2842 270.691 97.8665 271.527 97.8665H287.365C288.2 97.8665 288.618 98.2842 288.618 99.1196V134.605H292.828V99.1196C292.828 98.2842 293.246 97.8665 294.081 97.8665H309.92C310.755 97.8665 311.173 98.2842 311.173 99.1196V140.119C311.173 140.921 310.905 141.589 310.371 142.124L300.347 152.148C299.779 152.716 299.11 153 298.342 153H288.969C288.2 153 287.532 152.716 286.964 152.148L280.198 145.382H278.694L271.928 152.148C271.36 152.716 270.691 153 269.923 153H260.55ZM316.616 153C315.781 153 315.363 152.582 315.363 151.747V99.1196C315.363 98.2842 315.781 97.8665 316.616 97.8665H332.455C333.29 97.8665 333.708 98.2842 333.708 99.1196V151.747C333.708 152.582 333.29 153 332.455 153H316.616ZM316.366 93.7065C315.698 93.7065 315.363 93.3723 315.363 92.704V86.3386C315.363 85.6704 315.698 85.3362 316.366 85.3362H332.806C333.407 85.3362 333.708 85.6704 333.708 86.3386V92.704C333.708 93.3723 333.407 93.7065 332.806 93.7065H316.366ZM351.311 153C350.543 153 349.875 152.716 349.306 152.148L340.936 143.828C340.402 143.26 340.134 142.591 340.134 141.823V114.557H338.029C337.194 114.557 336.776 114.139 336.776 113.304V99.1196C336.776 98.2842 337.194 97.8665 338.029 97.8665H340.134V91.6014C340.134 90.766 340.552 90.3483 341.387 90.3483H357.226C358.061 90.3483 358.479 90.766 358.479 91.6014V97.8665H363.34C364.176 97.8665 364.593 98.2842 364.593 99.1196V113.304C364.593 114.139 364.176 114.557 363.34 114.557H358.479V134.605C358.479 135.274 358.679 135.808 359.08 136.209L363.992 141.121C364.326 141.455 364.493 141.957 364.493 142.625V151.747C364.493 152.582 364.076 153 363.24 153H351.311ZM368.989 153C368.154 153 367.736 152.582 367.736 151.747V87.4413C367.736 86.606 368.154 86.1883 368.989 86.1883H384.828C385.663 86.1883 386.081 86.606 386.081 87.4413V97.8665H395.804C396.573 97.8665 397.241 98.1506 397.809 98.7186L407.833 108.743C408.368 109.277 408.635 109.946 408.635 110.748V151.747C408.635 152.582 408.218 153 407.382 153H391.544C390.709 153 390.291 152.582 390.291 151.747V118.316C390.291 116.946 389.589 116.261 388.186 116.261H386.081V151.747C386.081 152.582 385.663 153 384.828 153H368.989Z" fill="#A9A9A9" fill-opacity="0.2"/>
                    <rect x="421" y="82" width="76" height="77" fill="url(#pattern0_501_17)"/>
                    <path d="M5.86256 197.966C5.5609 197.966 5.2986 197.854 5.07564 197.631L1.14103 193.697C0.931189 193.487 0.826266 193.225 0.826266 192.91V181.381C0.826266 181.067 0.931189 180.804 1.14103 180.595L5.07564 176.66C5.2986 176.437 5.5609 176.325 5.86256 176.325H16.3876C16.7155 176.325 16.8794 176.489 16.8794 176.817V197.474C16.8794 197.802 16.7155 197.966 16.3876 197.966H11.4497C11.2661 197.966 11.1152 197.94 10.9972 197.887C10.8792 197.835 10.7677 197.749 10.6628 197.631L9.67912 196.648L8.69547 197.631C8.47251 197.854 8.2102 197.966 7.90855 197.966H5.86256ZM8.81351 191.415H8.8922C9.15451 191.415 9.35124 191.343 9.48239 191.198C9.61354 191.054 9.67912 190.851 9.67912 190.588V182.877H8.85285C8.59055 182.877 8.38726 182.949 8.24299 183.093C8.09872 183.237 8.02659 183.441 8.02659 183.703V190.588C8.02659 190.851 8.09216 191.054 8.22332 191.198C8.36758 191.343 8.56431 191.415 8.81351 191.415ZM20.6053 197.966C20.2774 197.966 20.1135 197.802 20.1135 197.474V176.817C20.1135 176.489 20.2774 176.325 20.6053 176.325H31.1304C31.432 176.325 31.6943 176.437 31.9173 176.66L35.8519 180.595C36.0617 180.804 36.1667 181.067 36.1667 181.381V197.474C36.1667 197.802 36.0027 197.966 35.6748 197.966H29.4582C29.1303 197.966 28.9663 197.802 28.9663 197.474V184.352C28.9663 183.814 28.6909 183.545 28.1401 183.545H27.3138V197.474C27.3138 197.802 27.1499 197.966 26.822 197.966H20.6053ZM44.437 197.966C44.1354 197.966 43.8731 197.854 43.6501 197.631L39.7155 193.697C39.5056 193.487 39.4007 193.225 39.4007 192.91V181.381C39.4007 181.067 39.5056 180.804 39.7155 180.595L43.6501 176.66C43.8731 176.437 44.1354 176.325 44.437 176.325H46.483C46.7847 176.325 47.047 176.437 47.2699 176.66L48.2536 177.644V172.233C48.2536 171.906 48.4175 171.742 48.7454 171.742H54.9621C55.29 171.742 55.4539 171.906 55.4539 172.233V197.474C55.4539 197.802 55.29 197.966 54.9621 197.966H49.8864C49.7159 197.966 49.5913 197.933 49.5127 197.867C49.434 197.802 49.3422 197.723 49.2372 197.631L48.2536 196.648L47.2699 197.631C47.047 197.854 46.7847 197.966 46.483 197.966H44.437ZM47.388 191.415H47.4667C47.729 191.415 47.9257 191.343 48.0568 191.198C48.188 191.054 48.2536 190.851 48.2536 190.588V182.877H47.4273C47.165 182.877 46.9617 182.949 46.8174 183.093C46.6732 183.237 46.601 183.441 46.601 183.703V190.588C46.601 190.851 46.6666 191.054 46.7978 191.198C46.942 191.343 47.1388 191.415 47.388 191.415ZM75.8963 197.966C75.5684 197.966 75.4045 197.802 75.4045 197.474V176.778C75.4045 176.476 75.516 176.214 75.7389 175.991L79.6735 172.056C79.8834 171.847 80.1457 171.742 80.4604 171.742H83.7655C84.0934 171.742 84.2573 171.906 84.2573 172.233V178.45C84.2573 178.778 84.0934 178.942 83.7655 178.942H82.6245V197.474C82.6245 197.802 82.4605 197.966 82.1326 197.966H75.8963ZM74.8536 187.972C74.5257 187.972 74.3618 187.808 74.3618 187.48V181.244C74.3618 180.916 74.5257 180.752 74.8536 180.752H83.7655C84.0934 180.752 84.2573 180.916 84.2573 181.244V187.48C84.2573 187.808 84.0934 187.972 83.7655 187.972H74.8536ZM92.5375 197.966C92.2359 197.966 91.9735 197.854 91.7506 197.631L87.816 193.697C87.6061 193.487 87.5012 193.225 87.5012 192.91V176.817C87.5012 176.489 87.6652 176.325 87.993 176.325H94.2097C94.5376 176.325 94.7015 176.489 94.7015 176.817V189.939C94.7015 190.477 94.977 190.746 95.5278 190.746H96.3541V176.817C96.3541 176.489 96.518 176.325 96.8459 176.325H103.063C103.39 176.325 103.554 176.489 103.554 176.817V197.474C103.554 197.802 103.39 197.966 103.063 197.966H92.5375ZM114.815 197.966C114.723 197.966 114.625 197.953 114.52 197.926C114.428 197.9 114.33 197.861 114.225 197.808L110.625 196.097L107.143 194.425C106.906 194.32 106.788 194.057 106.788 193.638V181.381C106.788 181.067 106.893 180.804 107.103 180.595L111.038 176.66C111.261 176.437 111.523 176.325 111.825 176.325H117.805C118.107 176.325 118.369 176.437 118.592 176.66L122.527 180.595C122.737 180.804 122.842 181.067 122.842 181.381V189.447H114.264V190.195L115.897 190.923L119.674 192.005C119.819 192.018 119.891 192.221 119.891 192.615V197.474C119.891 197.802 119.727 197.966 119.399 197.966H114.815ZM115.071 185.709H115.11C115.609 185.709 115.982 185.565 116.231 185.277C116.494 184.988 116.625 184.562 116.625 183.998V183.939C116.625 183.375 116.494 182.949 116.231 182.66C115.982 182.372 115.609 182.227 115.11 182.227H115.051C114.592 182.227 114.231 182.372 113.969 182.66C113.72 182.949 113.595 183.375 113.595 183.939V183.998C113.595 184.562 113.72 184.988 113.969 185.277C114.218 185.565 114.586 185.709 115.071 185.709ZM126.568 197.966C126.24 197.966 126.076 197.802 126.076 197.474V172.233C126.076 171.906 126.24 171.742 126.568 171.742H132.784C133.112 171.742 133.276 171.906 133.276 172.233V197.474C133.276 197.802 133.112 197.966 132.784 197.966H126.568ZM136.979 197.966C136.651 197.966 136.487 197.802 136.487 197.474V172.233C136.487 171.906 136.651 171.742 136.979 171.742H143.195C143.523 171.742 143.687 171.906 143.687 172.233V197.474C143.687 197.802 143.523 197.966 143.195 197.966H136.979ZM154.925 197.966C154.833 197.966 154.735 197.953 154.63 197.926C154.538 197.9 154.44 197.861 154.335 197.808L150.735 196.097L147.252 194.425C147.016 194.32 146.898 194.057 146.898 193.638V181.381C146.898 181.067 147.003 180.804 147.213 180.595L151.148 176.66C151.371 176.437 151.633 176.325 151.935 176.325H157.915C158.217 176.325 158.479 176.437 158.702 176.66L162.637 180.595C162.847 180.804 162.951 181.067 162.951 181.381V189.447H154.374V190.195L156.007 190.923L159.784 192.005C159.928 192.018 160.001 192.221 160.001 192.615V197.474C160.001 197.802 159.837 197.966 159.509 197.966H154.925ZM155.181 185.709H155.22C155.718 185.709 156.092 185.565 156.341 185.277C156.604 184.988 156.735 184.562 156.735 183.998V183.939C156.735 183.375 156.604 182.949 156.341 182.66C156.092 182.372 155.718 182.227 155.22 182.227H155.161C154.702 182.227 154.341 182.372 154.079 182.66C153.83 182.949 153.705 183.375 153.705 183.939V183.998C153.705 184.562 153.83 184.988 154.079 185.277C154.328 185.565 154.695 185.709 155.181 185.709ZM171.222 197.966C170.92 197.966 170.658 197.854 170.435 197.631L166.5 193.697C166.29 193.487 166.186 193.225 166.186 192.91V181.381C166.186 181.067 166.29 180.804 166.5 180.595L170.435 176.66C170.658 176.437 170.92 176.325 171.222 176.325H173.268C173.569 176.325 173.832 176.437 174.055 176.66L175.038 177.644V172.233C175.038 171.906 175.202 171.742 175.53 171.742H181.747C182.075 171.742 182.239 171.906 182.239 172.233V197.474C182.239 197.802 182.075 197.966 181.747 197.966H176.671C176.501 197.966 176.376 197.933 176.297 197.867C176.219 197.802 176.127 197.723 176.022 197.631L175.038 196.648L174.055 197.631C173.832 197.854 173.569 197.966 173.268 197.966H171.222ZM174.173 191.415H174.251C174.514 191.415 174.711 191.343 174.842 191.198C174.973 191.054 175.038 190.851 175.038 190.588V182.877H174.212C173.95 182.877 173.747 182.949 173.602 183.093C173.458 183.237 173.386 183.441 173.386 183.703V190.588C173.386 190.851 173.451 191.054 173.583 191.198C173.727 191.343 173.924 191.415 174.173 191.415ZM201.638 197.966C201.311 197.966 201.147 197.802 201.147 197.474V172.233C201.147 171.906 201.311 171.742 201.638 171.742H207.855C208.183 171.742 208.347 171.906 208.347 172.233V177.644L209.331 176.66C209.554 176.437 209.816 176.325 210.118 176.325H212.164C212.465 176.325 212.727 176.437 212.95 176.66L216.885 180.595C217.095 180.804 217.2 181.067 217.2 181.381V192.91C217.2 193.225 217.095 193.487 216.885 193.697L212.95 197.631C212.727 197.854 212.465 197.966 212.164 197.966H201.638ZM208.347 191.415H209.173C209.436 191.415 209.639 191.343 209.783 191.198C209.927 191.054 209.999 190.851 209.999 190.588V183.703C209.999 183.441 209.934 183.237 209.803 183.093C209.672 182.949 209.475 182.877 209.213 182.877H209.134C208.885 182.877 208.688 182.949 208.544 183.093C208.413 183.237 208.347 183.441 208.347 183.703V191.415ZM226.434 206.169C226.106 206.169 225.942 206.005 225.942 205.678V202.097C225.942 201.822 226.008 201.625 226.139 201.507L227.615 200.031L229.051 198.595C229.208 198.412 229.287 198.202 229.287 197.966V196.648L228.303 197.631C228.08 197.854 227.818 197.966 227.516 197.966H225.47C225.168 197.966 224.906 197.854 224.683 197.631L220.749 193.697C220.539 193.487 220.434 193.225 220.434 192.91V176.817C220.434 176.489 220.598 176.325 220.926 176.325H227.142C227.47 176.325 227.634 176.489 227.634 176.817V190.588C227.634 190.851 227.706 191.054 227.851 191.198C227.995 191.343 228.198 191.415 228.46 191.415H229.287V176.817C229.287 176.489 229.451 176.325 229.779 176.325H235.995C236.323 176.325 236.487 176.489 236.487 176.817V200.779C236.487 201.094 236.382 201.356 236.172 201.566L233.89 203.848L231.903 205.835C231.785 205.953 231.667 206.038 231.549 206.091C231.431 206.143 231.287 206.169 231.116 206.169H226.434Z" fill="#A9A9A9" fill-opacity="0.2"/>
                    <rect x="252" y="163" width="40" height="40" fill="url(#pattern1_501_17)"/>
                    <defs>
                    <pattern id="pattern0_501_17" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_501_17" transform="scale(0.0131579 0.012987)"/>
                    </pattern>
                    <pattern id="pattern1_501_17" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image1_501_17" transform="scale(0.025)"/>
                    </pattern>
                    <image id="image0_501_17" width="76" height="77" xlinkHref="data:image/png;base64,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"/>
                    <image id="image1_501_17" width="40" height="40" xlinkHref="data:image/png;base64,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"/>
                    </defs>
                </svg>


                </div>

      
                
      
            </div> 
        </div>
        {isOpen && <SubmitFrom handleClose={togglePopup}/>}
        {isImgeOpen && <FullImage handleClose={toggleFullImagePopup} imgSrc={imgSrc}/>}
    </div>
  )
}
