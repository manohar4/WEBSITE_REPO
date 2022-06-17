import React, { useEffect } from 'react'
import './../App.css'
import './../css/Home.css'
import './../css/Global.css'
import location from'../assets/location.png';
import Header from '../components/Header';

export default function Home() {

    useEffect(()=>{
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
    },[])

    const back=false;

    

  return (
    <div className='home'>
        
        <div className='col'>
            <div className='row'>
            <Header back={back} backTo="/" headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'#fff'}}>Manohar Manu</p>}></Header>

                <div className='intro'>  
                    <p >Hey, I'm Manohar. I'm a User Experience designer based out in Bangalore, India.</p>
                    <p >I'm currently working in <a className='link' target='_blank' rel="noreferrer" href='http://agilesolutions.com/'>Agile Solutions</a> brazil based enterprise company as Senior User Experience Design. Most of my  previous work reflects with B2B Solutions in the area of Manufacturing, Fintech and many other sectors.</p>
                    <p >  I'm a self Learned Design with an engineering background</p>
                </div>
                <div className='pastExpereince'>
                    <h6 className='subTitle'>Past Expereince</h6>
                    <div className='experience-row'>
                        <div className='expereince-lineitems'>
                            <a className='link' target='_blank' rel="noreferrer" href='http://agilesolutions.com/' >Agile Solutions (Brazil/India) </a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Sr. Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2021Jul &#8212;  &emsp;&emsp;&emsp; </p>
                            </div>
                            

                        </div>
                        <div className='expereince-lineitems'>
                            <a className='link' target='_blank' rel="noreferrer" href='http://agilesolutions.com/' >Agile Solutions (Brazil) </a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2021Feb &#8212;'21Jun</p>
                            </div>
                        
                        </div>
                        <div className='expereince-lineitems' >
                            <a className='link' target='_blank' rel="noreferrer" href='https://incture.com/' >Incture (Bngl, India)</a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2019Aug &#8212;'21Jan</p>
                            </div>
                            
                        </div>
                        <div className='expereince-lineitems'>
                            <a className='link' target='_blank' rel="noreferrer" href='https://incture.com/' >Incture (Bngl, India)</a>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            
                            <div className="desgPeriod" >
                                <h4 style={{textAlign:'right'}} >Ass. Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2017Nov &#8212;'19Aug</p>
                            </div>
                           
                        </div>
                        <div className='expereince-lineitems' >
                            <h4 >Gleefie (Hyd , India) </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Graphic/UI Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}}>2017Aug &#8212;'19Oct</p>
                            </div>
                            
                        </div>
                        <div className='expereince-lineitems'>
                            <h4 >Brisky (Hyd , India) </h4>
                             <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                             <div className="desgPeriod">
                                <h4 style={{textAlign:'right'}} >Graphic Designer</h4>
                                <p style={{textAlign:'right',fontFamily: 'space Mono,sans-serif',fontSize:"14px"}} >2017Jun &#8212;'19Jul</p>
                            </div>
                            
                        </div>

                    </div>
                </div>

                <div className='location'>
                    <h6 className='subTitle'>From where</h6>
                    <div className='location-row'>
                       <img src={location} className='locationImg' alt="Vizag Location" ></img>
                       <p style={{textAlign:'right'}}> Vishakapatnam, India</p>

                    </div>
                </div>



                <div className='socialMedia'>
                    <h6 className='subTitle'>Social Media</h6>
                    <div className='social-row'>
                        <div className='social-lineitems'>
                            <h4 >Dribbble </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <a className='link' target='_blank' rel="noreferrer" href='https://dribbble.com/manoharmanu'>Follow</a>

                        </div>
                        <div className='social-lineitems'>
                        <h4 >Behance </h4>
                           <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <a className='link' target='_blank' rel="noreferrer" href='https://www.behance.net/manoharmande31'>Follow</a>
                        </div>
                        <div className='social-lineitems' >
                            <h4 >Twitter </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <a target='_blank' rel="noreferrer" href="https://twitter.com/manoharmanu4444?ref_src=twsrc%5Etfw" className="twitter-follow-button link" data-show-count="false">Follow</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        </div>
                        <div className='social-lineitems'>
                            <h4 >Linkedin </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <a target='_blank' rel="noreferrer" className='link' href='https://www.linkedin.com/in/manoharmanu4444/'>Connect</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
