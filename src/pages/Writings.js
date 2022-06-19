import React, { useEffect,useContext } from 'react'
import './../App.css'
import './../css/Writings.css'
import './../css/Global.css'
import {Link} from 'react-router-dom'
import * as FiIcons from 'react-icons/fi'
// import data from '../data/writings.json'
import {FetchWritingList} from '../helper/Context'
import Header from '../components/Header'


 function Writings() {

  const back= false; 

  const {writingsListData} = useContext(FetchWritingList);
  useEffect(()=>{
    window.scrollTo(0, 0);
    if(window.innerWidth<1024){
        document.getElementsByClassName('writings')[0].style.marginLeft='0px';
    }
},[])
    


  return (
    <div className='writings'>
    <div className='col'>
        <div className='row'>
        <p style={{opacity:"0",position:"relative"}} >----------------------------------------------------------------------------------------------------------------------</p>
        <Header back={back} backTo="/"   headerTitle={<h3>Writings</h3>}></Header>

        <div className='writingList'>
                  {writingsListData.map((item,index)=>{
                    const emojiCode= item.fields.emoji;
                      if(item.fields.linkIcon === "true"){
                        return(
                        <div className='writingItem' 
                        onClick={()=>{ window.open(item.fields.link); }}>
                          <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"4px"}}>
                              <span style={{fontSize:"16px"}}role="img">
                                {String.fromCodePoint(emojiCode,24) }
                              </span>
                              <h4>{item.fields.WritingTitle}</h4>
                          </div>
                            
                            {item.fields.linkIcon === "true" &&  
                            <FiIcons.FiArrowUpRight style={{fontSize:"24px",justifyContent:"flex-end"}} color='#ffffff'/> 
                            }
                        </div>)
                      }
                      else{
                        return(
                          <Link  to={`/WritingDetails/${item.fields.writing_ID}`}>
                          <div className='writingItem'>
                          <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"4px"}}>
                              <span style={{fontSize:"16px"}}role="img">
                                {String.fromCodePoint(emojiCode,24) }
                              </span>
                              <h4>{item.fields.WritingTitle}</h4>
                          </div>
                            
                            {item.fields.linkIcon === "true" &&  
                            <FiIcons.FiArrowUpRight style={{fontSize:"24px",justifyContent:"flex-end"}} color='#ffffff'/> 
                            }
                        </div>
                        </Link>)
                        }
                  })}
              
                     
  
                   
  
  
                  </div>




            
        </div>
    </div>
</div>
  )
}
export default Writings;