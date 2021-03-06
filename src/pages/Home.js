import React, { useEffect,useState } from 'react'
import { Helmet } from "react-helmet";
import './../App.css'
import './../css/Home.css'
import './../css/Global.css'
import Location_DarkMode from'../assets/Location_DarkMode.png';
import Location_LightMode from'../assets/Location_LightMode.png';
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


        if(document.documentElement.getAttribute('data-theme') === 'light'){

            setLocation(Location_LightMode);

            document.getElementsByClassName("toggleMode")[0].innerHTML = "Dark Mode: 0FF"
         }
         else{
            setLocation(Location_DarkMode);

            document.getElementsByClassName("toggleMode")[0].innerHTML = "Dark Mode: 0N"
         }

    },[])


function darkify(event) {

    
if(document.documentElement.getAttribute('data-theme') === 'light'){
    document.documentElement.setAttribute('data-theme', "");
    setLocation(Location_DarkMode);

    event.target.title = "Dark"
    event.target.innerHTML = "Dark Mode: ON"

 }
 else{

    document.documentElement.setAttribute('data-theme', "light");
    setLocation(Location_LightMode);

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

            <Header back={back} backTo="/" headerTitle={<div style={{width:"100%",display:"flex",justifyContent: "space-between"}}><p style={{fontSize:'18px',fontWeight:'700',color:'var( --text-color0)',padding:"0.5rem 0rem"}}>Manohar Manu</p> <button  title='Dark' onClick={(event)=>{darkify(event)}} className="primaryBtn toggleMode"></button></div>}></Header>

                <div className='intro'>   
                    <p >Hey, I'm Manohar. I'm a  <span className='highlighter'> UX and interface designer </span>based out of Bangalore, India.</p>
                    <p >I'm currently designing enterprise products and leading the design team??at 
                        <a className='link' target='_blank' rel="noreferrer" href='http://agilesolutions.com/'> Agile Solutions</a> as a 
                     <span className='highlighter'> Senior UX Designer</span>. Over the last five years, I've spent the majority of my time building B2B enterprise applications on <span className='highlighter'> SAP</span> and have also been part of working on various digital solutions in manufacturing, ecommerce, and many other sectors.</p>
                    <div style={{display:"flex",gap:"1rem",marginTop:"1rem"}}>
                         <a rel="noreferrer" className='link' href="mailto:manoharmanu4444@gmail.com" target="_blank">
                            <button  style={{margin:"0"}} className='fillBtn'> <FaIcons.FaHandshake className='backIcon'/>Get In Touch</button>
                        </a>
                        <button style={{margin:"0"}} className='primaryBtn'   onClick={togglePopup} >  <GiIcons.GiHand className='backIcon'/>Say Hello</button>
                        
                    </div>
                </div>

                <div className='pastExpereince'>
                    <h6 className='subTitle'>PAST EXPERIENCES</h6>
                    <div className='experience-row'>
                        <div className='expereince-lineitems'>
                            <a className='link' target='_blank' rel="noreferrer" href='http://agilesolutions.com/' >Agile Solutions (Brazil/India) </a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color7)'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Sr. Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2021Jul &#8212;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            

                        </div>
                        <div className='expereince-lineitems'>
                            <a className='link' target='_blank' rel="noreferrer" href='http://agilesolutions.com/' >Agile Solutions (Brazil) </a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color7)'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2021Feb &#8212;'21Jun</p>
                            </div>
                        
                        </div>
                        <div className='expereince-lineitems' >
                            <a className='link' target='_blank' rel="noreferrer" href='https://incture.com/' >Incture (Bngl, India)</a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color7)'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2019Aug &#8212;'21Jan</p>
                            </div>
                            
                        </div>
                        <div className='expereince-lineitems'>
                            <a className='link' target='_blank' rel="noreferrer" href='https://incture.com/' >Incture (Bngl, India)</a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color7)'}}></div>
                            
                            <div className="desgPeriod" >
                                <h4 style={{textAlign:'right'}} >Ass. Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2017Nov &#8212;'19Aug</p>
                            </div>
                           
                        </div>
                        <div className='expereince-lineitems' >
                            <h4 >Gleefie, Brisky(Interships) </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color7)'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Graphic/UI Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}}>2017Jun &#8212;'17Oct</p>
                            </div>
                            
                        </div>

                    </div>
                </div>

                <div className='location'>
                    <h6 className='subTitle'>FROM WHERE</h6>
                    <div className='location-row'>
                       <img src={location} onClick={(event)=>{toggleFullImagePopup(event)}}  className='locationImg' alt="Vizag Location" ></img>
                       <p style={{textAlign:'right'}}> Visakhapatnam, India</p>

                    </div>
                </div>

                <div className='socialMedia'>
                    <h6 className='subTitle'>SOCIAL MEDIA</h6>
                    <div className='social-row'>
                        <div className='social-lineitems'>
                            <h4 >Dribbble </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color7)'}}></div>
                            <a className='link' target='_blank' rel="noreferrer" href='https://dribbble.com/manoharmanu'>Follow</a>

                        </div>
                        <div className='social-lineitems'>
                        <h4 >Behance </h4>
                           <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color7)'}}></div>
                            <a className='link' target='_blank' rel="noreferrer" href='https://www.behance.net/manoharmande31'>Follow</a>
                        </div>
                        <div className='social-lineitems' >
                            <h4 >Twitter </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color7)'}}></div>
                            <a target='_blank' rel="noreferrer" href="https://twitter.com/manoharmanu4444?ref_src=twsrc%5Etfw" className="twitter-follow-button link" data-show-count="false">Follow</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </div>
                        <div className='social-lineitems'>
                            <h4 >Linkedin </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color7)'}}></div>
                            <a target='_blank' rel="noreferrer" className='link' href='https://www.linkedin.com/in/manoharmanu4444/'>Connect</a>
                        </div>
                        <div className='social-lineitems'>
                            <h4 >Email </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px var(--text-color7)'}}></div>
               
                                       <a rel="noreferrer" className='link' href="mailto:manoharmanu4444@gmail.com" target="_blank">Get In Touch</a>
                        </div>
                    </div>
                </div>

                <div className="blockquote-wrapper">
  <div className="blockquote">
 
    <p>
    "People don't use <span  >products</span>  because of  <span  >great design</span> ; <span  > Great designs</span> makes them to use the  <span  >Product</span>"
     </p>
  </div>
                    </div>

                <div id="splineFlex" style={{display:"flex",flexDirection:"row",borderRadius:"1rem"}}>
                <img onClick={(event)=>{toggleFullImagePopup(event)}}  style={{flex:"1",width:"50%",height:"50%",padding:"10%",marginLeft:"10%"}} src={handlight} alt="korean Love symbol"></img>
                
                
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
