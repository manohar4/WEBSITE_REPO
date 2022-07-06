import React, { useEffect,useContext } from 'react'
import { Helmet } from "react-helmet";
import './../App.css'
import './../css/Writings.css'
import './../css/Global.css'
import {Link} from 'react-router-dom'
import * as FiIcons from 'react-icons/fi'
// import data from '../data/writings.json'
import {FetchWritingList} from '../helper/Context'
import Header from '../components/Header'

var emojiString;
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
      <Helmet>
        <title>Writings | Manohar Manu</title>
        <meta name="description" content="Articles, blogs - I write about design, UX UI, and Product Design, Visual Designs, best Practices in UX and UI, User Research and many more"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
    </Helmet>
    <div className='col'>
        <div className='row'>
        <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
        <Header back={back} backTo="/"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'#fff',padding:"0.5rem 0rem"}}>Writings</p>}></Header>


        
                          <div className='writingList'>
                          {
                            writingsListData.map((item,index)=>{
                              return(
                              <div key={index}>
                              <h6 style={{marginBottom:"0.5rem"}}>{writingsListData[index].writingGroupName}</h6>
                              {
                              item.WritingDetails.map((item,index)=>{
                                const emojiCode= item.emoji;
                                  if(item.linkIcon === "true"){
  
                                    emojiString= emojiCode.split(",")
                                    emojiString.push("");
                                    emojiString.push("");
                                    emojiString.push("");
                                  
                                    return(
                                    <div key={index} className='writingItem' 
                                    onClick={()=>{ window.open(item.link); }}>
                                      <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.5rem"}}>
                                          <span style={{fontSize:"16px"}}role="img">
                                            {String.fromCodePoint(emojiString[0],emojiString[1],emojiString[2],emojiString[3]) }
                                          </span>
                                          <h4>{item.WritingTitle}</h4>
                                      </div>
                                        
                                        {item.linkIcon === "true" &&  
                                        <div style={{width:"24px",height:"24px",justifyContent:"flex-end"}}>
                                        <FiIcons.FiArrowUpRight style={{fontSize:"24px"}} color='#ffffff'/> 
                                        </div>
                                        }
                                    </div>)
                                  }
                                  else{
                                    emojiString= emojiCode.split(",")
                                    emojiString.push("");
                                    emojiString.push("");
                                    emojiString.push("");
                                    return(
                                      <Link key={index}  to={`/writingDetails/${item.writing_ID}`}>
                                      <div className='writingItem'>
                                      <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.5rem"}}>
                                          <span style={{fontSize:"16px"}}role="img">
                                            {String.fromCodePoint(emojiString[0],emojiString[1],emojiString[2],emojiString[3]) }
                                          </span>
                                          <h4>{item.WritingTitle}</h4>
                                      </div>
                                        
                                        {item.linkIcon === "true" &&  
                                        <div style={{width:"24px",height:"24px",justifyContent:"flex-end"}}>
                                        <FiIcons.FiArrowUpRight style={{fontSize:"24px"}} color='#ffffff'/> 
                                        </div>
                                        }
                                    </div>
                                    </Link>)
                                    }
                              })}
                             </div>
                              )
                            })
                          }
                         

                            
                            </div>
                        
        
        


            
        </div>
    </div>
</div>
  )
}
export default Writings;