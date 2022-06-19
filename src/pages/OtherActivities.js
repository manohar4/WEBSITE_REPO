import React,{useEffect} from 'react'
import './../App.css'
import './../css/OtherActivities.css'
import './../css/Global.css'
import Figma from "./../assets/tools/figma.png"
import Miro from "./../assets/tools/Miro.png"
import Sketch from "./../assets/tools/Sketch.png"
import XD from "./../assets/tools/XD.png"
import Adobe_CC from "./../assets/tools/Adobe CC.png"
import Header from '../components/Header'
import Testimonials from '../components/Testimonials'

 function OtherActivities() {

  const back = false;
  useEffect(()=>{
    window.scrollTo(0, 0);
    if(window.innerWidth<1024){
        document.getElementsByClassName('otherActivities')[0].style.marginLeft='0px';
    }
},
 // eslint-disable-next-line
[])



  return (
    < div className = 'otherActivities' > 
    <div className='col'>
            <div className='row' style={{overflowX:"auto"}}>

            <p style={{opacity:"0",position:"relative"}} >----------------------------------------------------------------------------------------------------------------------</p>
            <Header back={back} backTo="/"   headerTitle={<h3>Other Activities</h3>}></Header>
            <div className='tools'>
                    <h6 className='subTitle'>Tools I'm familiar with</h6>
                    <div className='tool-row'>
                        <div className='tool-lineitems'>
                            <img src={Figma} alt="Brand Logo"/>
                            <h4 >Figma </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <p>Experienced</p>
                        </div>
                        <div className='tool-lineitems'>
                            <img src={XD} alt="Brand Logo"/>
                            <h4 >XD </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <p>Experienced</p>
                        </div>
                        <div className='tool-lineitems'>
                            <img src={Sketch} alt="Brand Logo"/>
                            <h4 >Sketch </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <p>Moderate</p>
                        </div>
                        <div className='tool-lineitems'>
                            <img src={Miro} alt="Brand Logo"/>
                            <h4 >Miro </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <p>Good</p>
                        </div>
                        <div className='tool-lineitems'>
                            <img src={Adobe_CC} alt="Brand Logo"/>
                            <h4 >Adobe Create Cloud Tools </h4>
                            <div style={{flexGrow:1,borderBottom:'dotted 2px #ffffff60'}}></div>
                            <p>Moderate</p>
                        </div>
                        <div className='tool-lineitems'>
                            <h4 >-- Zeplin, Marvel, Framer, Procreate and more</h4>
                        </div>
                    </div>
                </div>
                
            
            
            <Testimonials></Testimonials>


            
            </div>
        </div>
    </div >
  )
}
export default OtherActivities;