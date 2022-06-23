import React,{useEffect,useState} from 'react'
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
import * as TbIcons from 'react-icons/tb'

import CustomCursor from "../assets/tools/Sketch.png"





// import Animation_1 from './../assets/animationsGif/1.gif'
// import Animation_2 from './../assets/animationsGif/2.gif'
// import Animation_3 from './../assets/animationsGif/3.gif'
// import Animation_4 from './../assets/animationsGif/4.gif'
// import Animation_5 from './../assets/animationsGif/5.gif'
// import Animation_6 from './../assets/animationsGif/6.gif'
// import Animation_7 from './../assets/animationsGif/7.gif'
// import Animation_8 from './../assets/animationsGif/8.gif'
// import Animation_9 from './../assets/animationsGif/9.gif'
// import Animation_10 from './../assets/animationsGif/10.gif'
// import Animation_11 from './../assets/animationsGif/11.gif'
// import Animation_12 from './../assets/animationsGif/12.gif'
// import Animation_13 from './../assets/animationsGif/13.gif'



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

 function OtherActivities() {

    window.prevAnimoji =1;
    
    const[gif,setGif] = useState(Animation_1)

  window.currentAnimoji = 9;
  window.previousArray = [];
  window.startLoop = true;

  const back = false;
  useEffect(()=>{
    window.scrollTo(0, 0);
    if(window.innerWidth<1024){
        document.getElementsByClassName('otherActivities')[0].style.marginLeft='0px';
        document.getElementsByClassName('animationFlex')[0].style.flexDirection='column';
        document.getElementsByClassName('animationFlex')[0].style.gap='2rem';        
      }
},
 // eslint-disable-next-line
[])

const onAnimationClick =()=>{

    
    window.currentAnimoji = Math.floor(Math.random() * 10) + 1;

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

  return (
    < div className = 'otherActivities'> 
    <div className='col'>
            <div className='row'>

            <p style={{opacity:"0",position:"relative"}} >----------------------------------------------------------------------------------------------------------------------</p>
            <Header back={back} backTo="/"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'#fff',padding:"0.5rem 0rem"}}>Other Activities</p>}></Header>
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

            <div  className='animationFlex' style={{display:"flex",borderRadius:"1rem",backgroundColor:"#000000" ,cursor: "url(" + CustomCursor + ")"}}>

              <div className='animationGroup' style={{display:"flex",flex:"1",textAlign: "center",cursor: "pointer"}}>
                  <img style={{width:"100%",borderRadius:"1rem"}} src={gif}  alt="emoji animation"></img>
              </div>

              <div style={{display:"flex", flexDirection:"column",flex:"1",justifyContent:"center",textAlign:"left",gap:"0.4rem"}}>
                <h1 style={{lineHeight:"2.4rem"}}> THANKS <br/> FOR  VISITING</h1>
                <button onClick={()=> onAnimationClick()} className='primaryBtn' style={{width:"auto",alignSelf:"flex-start",margin:"0rem"}}> <TbIcons.TbConfetti className='backIcon'/><h3>Show Me A Move</h3></button>
              </div>
            </div>
            
            </div>
        </div>
    </div >
  )
}
export default OtherActivities;