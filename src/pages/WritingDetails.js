import React, { useEffect,useContext,useState } from 'react'
import { Helmet } from "react-helmet";
import './../App.css'
import './../css/Global.css'
import './../css/ProjectDetails.css'
// import * as FiIcons from 'react-icons/fi'
import { FetchWritingList } from '../helper/Context';
import { useParams} from 'react-router-dom'
import Prism from 'prismjs';
import './../css/prism.css';
import Header from '../components/Header'
import Plyr from 'plyr';
import '../css/plyr.css'
import { useNavigate } from "react-router-dom";
import Carousel from '../components/Carousel'
import FullImage from '../components/FullImage';

var emojiString;

export default function WritingDetails() {
  
    const {writingsListData} = useContext(FetchWritingList);

    const [isImgeOpen, setIsImgeOpen] = useState(false);
    const [imgSrc,setImgSrc] = useState("");
    const { id } = useParams();
    const back = true;
    const navigation = useNavigate()


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
        window.scrollTo(0,0);
        // eslint-disable-next-line
        const players = Array.from(document.querySelectorAll('.js-player')).map((p) => new Plyr(p));
        Prism.highlightAll();
        if(window.innerWidth<1024){
            document.getElementsByClassName('writingDetails')[0].style.marginLeft='0px';
        }
    },
    // eslint-disable-next-line
    [])
    
    var count=-1;

    if(writingsListData.length!==0){

        const fitlerWritingsarray = writingsListData.filter(function (el){ return el.fields.writing_ID.toString() ===  id});
        if(!fitlerWritingsarray[0]){
            navigation("/PageNotFound");
        }
       
        else{
            var writing= fitlerWritingsarray[0].fields;
            var writingTitle = writing.WritingTitle;
        }

        
    }
   
  
 

  return (
      <div className='writingDetails'>
           <Helmet>
        <title>{writingTitle}</title>
        <meta name="description" content="Article about Design | UX UI | Best Practices | principles of UX | Laws of UX | UX writings and more "/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
    </Helmet>
            <div className='col'>
                <div className='row'>
                    <p style={{opacity:"0",position:"relative",zIndex:"-100",maxHeight:"1px"}} >----------------------------------------------------------------------------------------------------------------------</p>
                    <div style={{alignItems:"center"}}>
                    <Header back={back} backTo="/writings" headerTitle={<h2> {writingTitle}</h2>}></Header> 

                        { 
                        writing ? writing.WritingDetails.map((item,index)=>{

                            if(item.elementType === 'h1'){
                                return (<h1 key={index} style={{marginBottom:" 1rem",marginTop: "1rem"}}>{item.elementData}</h1>);
                            }
                            else if(item.elementType === 'h2'){
                                return (<h2 key={index} style={{marginBottom:" 1rem",marginTop: "1rem"}} >{item.elementData}</h2>);
                            }
                            else if(item.elementType === 'h3'){
                                return (<h3 key={index} style={{marginBottom:" 1rem",marginTop: "1rem"}} >{item.elementData}</h3>);
                            }
                            else if(item.elementType === 'p'){
                                return (<p key={index} style={{marginBottom:" 1rem",marginTop: "1rem"}} >{item.elementData}</p>);
                            }
                            else if(item.elementType === 'coverImg'){
                                return (
                                <figure key={index}>
                                <img style={{height:item.elementHeight? item.elementHeight :"100%",width:item.elementWidth? item.elementWidth :"100%",objectFit: "cover",borderRadius:"4px",marginBottom:'0.5rem'}}  src={writing.CoverPic[0].url} alt="Project Details" ></img>
                                <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: item.elementCaption?"":"none"}}><cite>{item.elementCaption}</cite></figcaption>
                                </figure>);
                            }
                            else if(item.elementType === 'img'){
                                count++;
                                return (
                                <figure key={index}>
                                    <img onClick={(event)=>{toggleFullImagePopup(event)}}  style={{height:item.elementHeight? item.elementHeight :"24rem",width:item.elementWidth? item.elementWidth :"100%",objectFit: "cover",borderRadius:"4px",marginBottom:'0.5rem'}} src={writing.mediaFiles[count].url} alt="Project Details" ></img>
                                    <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: item.elementCaption?"":"none"}}><cite>{item.elementCaption}</cite></figcaption>
                                </figure>);
                            }
                            else if(item.elementType === 'video'){
                                count++;
                                return (
                                // <figure>
                                //     <video style={{height:item.elementHeight? item.elementHeight :"24rem",width:item.elementWidth? item.elementWidth :"100%",  display:"flex" , margin: "auto",marginTop: "1rem", marginBottom: "1rem",border:"2px solid #ffffff60",borderRadius:"8px",objectFit: "cover"}} controls="controls" src={item.elementData} />
                                //     <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: item.elementCaption?"":"none"}}><cite>{item.elementCaption}</cite></figcaption>

                                // </figure>
                                <figure key={index} style={{boxShadow: "8px 8px #ff7744f0"}}>
                                        <video className="js-player" style={{height:item.elementHeight? item.elementHeight :"24rem",width:item.elementWidth? item.elementWidth :"100%",  display:"flex" , margin: "auto",objectFit: "cover"}} crossorigin playsinline  > <source src={writing.mediaFiles[count].url} type='video/mp4'></source></video>
                                     <figcaption style={{color:"#7f7f7f",textAlign:"center",fontSize:"0.8rem",marginTop:"-0.6rem",marginBottom:"1rem", display: item.elementCaption?"":"none"}}><cite>{item.elementCaption}</cite></figcaption>

                                 </figure>

                                );
                            }
                            else if(item.elementType === 'divider'){
                                return (<hr key={index} className="solid"/>);
                            }
                            else if(item.elementType === '...'){
                                return (<div key={index} style={{display:"flex",justifyContent:"space-evenly"}}><hr style={{border: "0px",opacity: "60%",content:"...",color:"white",letterSpacing: "1rem",marginLeft: "1rem"}} className="solid dot"/></div>);
                            }
                            else if(item.elementType === 'spacer_small'){
                                return (<div key={index} style={{opacity:"0%"}}><hr className="solid" /></div>);
                            }
                            else if(item.elementType === 'spacer_medium'){
                                return (<div key={index} style={{opacity:"0%"}}><hr className="solid" /><hr className="solid" /></div>);
                            }
                            else if(item.elementType === 'spacer_large'){
                                return (<div key={index} style={{opacity:"0%"}}><hr className="solid" /><hr className="solid" /><hr className="solid" /></div>);
                            }
                            else if(item.elementType === 'blockQuote'){
                                return (<blockquote key={index} style={{margin:"0.6rem 0px"}}>❝ {item.elementData} ❞ </blockquote>)
                            } 
                            else if(item.elementType === 'callout'){

                                emojiString= item.elementEmoji.split(",")
                                emojiString.push("");
                                emojiString.push("");
                                emojiString.push("");
                                

                                return (
                                        
                                        <div key={index} style={{display:"flex",backgroundColor:"#ffffff20",padding:"1rem",borderRadius:"4px",justifyContent:"flex-start",alignItems:"center",gap:"4px"}}>
                                            <span style={{fontSize:"16px"}}role="img">
                                              {String.fromCodePoint(emojiString[0],emojiString[1],emojiString[2],emojiString[3]) }
                                            </span>
                                            <p>{item.elementData}</p>
                                        </div>


                                )
                            }
                            else if(item.elementType === 'bulletList'){
                                return (
                                    <ul key={index} style={{margin:"1rem 0rem",listStyleType: "square",listStylePosition: "inside"}}>
                                          {item.elementData.map((item,index)=>{
                                              return( <li key={index} style={{ fontSize:"16px",fontWeight:400,color:"#ffffffd0", margin: "0.4rem 0px"}}>{item}</li>)
                                          })}
                                    </ul>
                                )
                            }
                            else if(item.elementType === 'numberList'){
                                return (
                                    <ol key={index} style={{margin:"1rem 0rem",listStylePosition: "inside"}}>
                                          {item.elementData.map((item,index)=>{
                                              return( <li key={index} style={{ fontSize:"16px",fontWeight:400,color:"#ffffffd0", margin: "0.4rem 0px"}}>{item}</li>)
                                          })}
                                    </ol>
                                )
                            }
                            else if(item.elementType === 'code'){
                                return (<pre key={index} ><code className='language-css' >{item.elementData}</code></pre>)
                            }
                            else if(item.elementType === 'highlighter'){
                                return (<span key={index} style={{backgroundColor:"#FFFF00"}}>{item.elementData}</span>)
                            }
                            else if(item.elementType === 'button'){
                                return (
                                <button key={index} className='fillBtn' onClick={()=>{window.open(item.elementLink)}} >
                                    {item.elementData}
                                </button>       
                                )
                            }
                            else if(item.elementType === 'link'){
                                return (
                                <a className='link' key={index} href={item.elementData} target="_blank" rel="noreferrer">{item.elementTitle}</a>      
                                )
                            }
                            else if(item.elementType === 'youtube'){
                                return (
                                    <iframe  key={index}  width="100%" height="315" src={item.elementData}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                                )
                            }
                            else if(item.elementType === 'carousel'){

                                for(var i=0;i<=item.elementData.length-1;i++){
                                    count++;
                                    item.elementData[i]= writing.mediaFiles[count].url;
                                    
                                }

                                return(
                                    <Carousel key={index}  elementData={item.elementData} elementWidth={item.elementWidth? item.elementWidth:"100%"} elementHeight={item.elementHeight?item.elementHeight:"24rem"}  ></Carousel>
                                )
                            }
                            return "";
                            }): ""}
                    </div>
                </div>
            </div>
            {isImgeOpen && <FullImage handleClose={toggleFullImagePopup} imgSrc={imgSrc}/>}
      </div>
  ) 
}
