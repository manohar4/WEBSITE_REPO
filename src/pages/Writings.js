import React, { useEffect } from 'react'
import './../App.css'
import './../css/Writings.css'
import './../css/Global.css'
import * as FiIcons from 'react-icons/fi'
import data from '../data/writings.json'


 function Writings() {

  useEffect(()=>{
    if(window.innerWidth<1024){
        document.getElementsByClassName('writings')[0].style.marginLeft='0px';
    }
},[])
    


  return (
    <div className='writings'>
    <div className='col'>
        <div className='row'>
        <p style={{opacity:"0",position:"relative"}} >----------------------------------------------------------------------------------------------------------------------</p>

        <div className='writingList'>
                <h6 style={{marginBottom:"1rem"}}>Writings</h6>
                  {data.writings.map((item,index)=>{
                    const emojiCode= item.emoji;
                    return(
                      <div className='writingItem'>
                        <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"4px"}}>
                            <span style={{fontSize:"16px"}}role="img">
                              {String.fromCodePoint(emojiCode,24) }
                            </span>
                            <h4>{item.WritingTitle}</h4>
                        </div>
                          
                          {item.linkIcon &&  
                          <FiIcons.FiArrowUpRight style={{fontSize:"24px",justifyContent:"flex-end"}} color='#ffffff'/> 
                          }
                      </div>
                    )
                  })}
              
                     
  
                   
  
  
                  </div>




            
        </div>
    </div>
</div>
  )
}
export default Writings;