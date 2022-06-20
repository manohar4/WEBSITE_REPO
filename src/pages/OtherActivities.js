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
import * as TbIcons from 'react-icons/tb'




import Animation_1 from './../assets/Animations/1.mp4'
import Animation_2 from './../assets/Animations/2.mp4'
import Animation_3 from './../assets/Animations/3.mp4'
import Animation_4 from './../assets/Animations/4.mp4'
import Animation_5 from './../assets/Animations/5.mp4'
import Animation_6 from './../assets/Animations/6.mp4'
import Animation_7 from './../assets/Animations/7.mp4'
import Animation_8 from './../assets/Animations/8.mp4'
import Animation_9 from './../assets/Animations/9.mp4'

import Animation_10 from './../assets/Animations/10.mp4'
import Animation_11 from './../assets/Animations/11.mp4'
import Animation_12 from './../assets/Animations/12.mp4'
import Animation_13 from './../assets/Animations/13.mp4'

 function OtherActivities() {
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

  setTimeout(function (event) {
    const animContainer = document.getElementsByClassName('animationGroup')[0];
    var currentVideo = animContainer.children[window.currentAnimoji -
        1];
    currentVideo.style.display = "none";
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    window.currentAnimoji = random_item(items);
    animContainer.children[window.currentAnimoji - 1].style.display =
        "block";
    animContainer.children[window.currentAnimoji - 1].currentTime = 0;
    animContainer.children[window.currentAnimoji - 1].play();
}, 1000)

}

const random_item =(items) =>{
  window.globalArray = items;
  if (window.previousArray.length === window.globalArray.length) {
      var lastValueLoop = window.previousArray[9];
      window.previousArray = [];
      window.previousArray.push(lastValueLoop);
      window.lastLoopFlag = true;
  }
  window.resultedArray = arr_diff(window.previousArray, window.globalArray);
  // var random = Math.floor((Math.random() * 10) + 1);
  var nextNumber = window.resultedArray[Math.floor(Math.random() * window.resultedArray
      .length)];
  window.previousArray.push(nextNumber);

  if (window.lastLoopFlag) {
      window.previousArray.splice(0, 1);
      window.lastLoopFlag = false;
  }
  return items[nextNumber - 1];
  //return items[Math.floor(Math.random() * items.length)];
}

const arr_diff =(a1,a2) =>{

  var a = [];

  for (var i = 0; i <= a2.length - 1; i++) {
      var valueCheck = true;
      for (var j = 0; j <= a1.length - 1; j++) {
          if (a1[j] === a2[i]) {
              valueCheck = false;
          }
      }
      if (valueCheck) {
          a.push(a2[i]);
      }
  }
  return a;
}

  



  return (
    < div className = 'otherActivities' > 
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

            <div  className='animationFlex' style={{display:"flex",borderRadius:"1rem",backgroundColor:"#000000"}}>

              <div className='animationGroup' style={{display:"flex",flex:"1",textAlign: "center",cursor: "pointer"}}>

                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_1} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_2} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_3} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_4} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_5} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_6} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_7} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_8} type="video/mp4"/>
                  </video>
                  <video style={{borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source style={{display:"none"}} id="animojiSrcId" src={Animation_9} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_10} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_11} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_12} type="video/mp4"/>
                  </video>
                  <video style={{display: "none",borderRadius:"1rem"}} class="animoji" width="100%" height="100%" autoplay="false"
                      muted="">
                      <source id="animojiSrcId" src={Animation_13} type="video/mp4"/>
                  </video>
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