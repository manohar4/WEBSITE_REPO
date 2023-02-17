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

var emojiString,emojiOutput;
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
        <meta name="keywords" content="manoharmanu,manoharmanu.in,manu,manohar,manohar ui/ux,manoharmanu ui/ux,ui/ux designer in bagalore,ui/ux,ui/ux designer,ui/ux developer,ui/ux architect,ui/ux artist,ui/ux analyst,ui/ux app design,about ui/ux developer,all about ui/ux design,best ui ux design,best ui ux designer,cv ui ux designer,ui/ux designer job description" />

    </Helmet>
    <div className='col'>
        <div className='row'>
        <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
        <Header back={back} backTo="/"   headerTitle={<p style={{fontSize:'18px',fontWeight:'700',color:'var( --text-color0)',padding:"0.5rem 0rem"}}>Writings</p>}></Header>


        
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
                                    if(emojiString.length === 1){
                                      emojiOutput = String.fromCodePoint(emojiString[0]) ;
                                    }
                                    if(emojiString.length === 2){
                                      emojiOutput = String.fromCodePoint(emojiString[0],emojiString[1]) ;
                                    }
                                    if(emojiString.length === 3){
                                      emojiOutput = String.fromCodePoint(emojiString[0],emojiString[1],emojiString[2]) ;
                                    }
                                    if(emojiString.length === 4){
                                      emojiOutput =String.fromCodePoint(emojiString[0],emojiString[1],emojiString[2],emojiString[3]);
                                    }

                                    
                                  
                                  
                                    return(
                                    <div key={index} className='writingItem' 
                                    onClick={()=>{ window.open(item.link); }}>
                                      <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.5rem"}}>
                                          <span style={{fontSize:"16px"}}role="img">
                                            {emojiOutput }
                                          </span>
                                          <h4>{item.WritingTitle}</h4>
                                      </div>
                                        
                                        {item.linkIcon === "true" &&  
                                        <div style={{width:"24px",height:"24px",justifyContent:"flex-end"}}>
                                        <FiIcons.FiArrowUpRight style={{fontSize:"24px"}} color='var( --text-color0)'/> 
                                        </div>
                                        }
                                    </div>)
                                  }
                                  else{
                                    emojiString= emojiCode.split(",")
                                    emojiString= emojiCode.split(",")
                                    if(emojiString.length === 1){
                                      emojiOutput = String.fromCodePoint(emojiString[0]) ;
                                    }
                                    if(emojiString.length === 2){
                                      emojiOutput = String.fromCodePoint(emojiString[0],emojiString[1]) ;
                                    }
                                    if(emojiString.length === 3){
                                      emojiOutput = String.fromCodePoint(emojiString[0],emojiString[1],emojiString[2]) ;
                                    }
                                    if(emojiString.length === 4){
                                      emojiOutput =String.fromCodePoint(emojiString[0],emojiString[1],emojiString[2],emojiString[3]);
                                    }
                                    return(
                                      <Link key={index}  to={ item.linkIcon=== "false"?`/writingDetails/${item.writing_ID}`: `/${item.linkIcon}` }>
                                      <div className='writingItem'>
                                      <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.5rem"}}>
                                          <span style={{fontSize:"16px"}}role="img">
                                            {emojiOutput }
                                          </span>
                                          <h4>{item.WritingTitle}</h4>
                                      </div>
                                        
                                        {item.linkIcon === "true" &&  
                                        <div style={{width:"24px",height:"24px",justifyContent:"flex-end"}}>
                                        <FiIcons.FiArrowUpRight style={{fontSize:"24px"}} color='var( --text-color0)'/> 
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
                        
        
                            <div style={{marginTop:"4rem",textAlign:"center"}}>
            <p style={{marginBottom:"0.5rem"}}>that's it</p>
            <svg width="125" height="17" viewBox="0 0 125 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.99999 8.31634C10.2957 0.983039 23.3769 0.983037 31.6726 8.31634C41.8853 17.0653 55 15.3989 62.0828 8.31634C71 -0.600851 84.1441 1.35869 92.1241 8.31634C100.569 15.6791 114.555 15.6791 123 8.31634"  className="ender" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>   


            
        </div>
    </div>
</div>
  )
}
export default Writings;