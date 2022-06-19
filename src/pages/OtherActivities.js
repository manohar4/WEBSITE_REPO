import React,{useEffect} from 'react'
import './../App.css'
import './../css/OtherActivities.css'
import './../css/Global.css'
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
            <Testimonials></Testimonials>
                
            </div>
        </div>
    </div >
  )
}
export default OtherActivities;