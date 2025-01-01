import React from 'react'
import { useState,useEffect } from 'react'
import Airtable from 'airtable';
import '../App.css'
import '../css/submitForm.css'
import MsgDelivered from'../assets/messageDelivered.png';


const SubmitFrom = (props)=>{

   const[form,setFrom] = useState({
       name:"",
       message:""
   })
  // var base = new Airtable({apiKey: 'keybsrdTHoDUuYEPf'}).base('app6Go1Ou8TXBXOW8');

   var base = new Airtable({apiKey: 'patA5rPF7pM9PBs5D.92677489e8f5e8d589a993ea8f020854800562cbce30a65ba9cf7077849f4b7b'}).base('app6Go1Ou8TXBXOW8');
   
   useEffect(()=>{

    if(window.innerWidth<1024){
        document.getElementsByClassName('popup-box')[0].style.alignItems='flex-start';
    }
   });



    const onHandleSubmit=(e)=>{

        e.preventDefault();
        var recordCreated = false;

        if(form.message === "" || form.name === "" ){
            return alert("Plese fill the form");
        }


        base('Website Messages').create([
            {
                "fields": {
                "Sender Name": form.name,
                "Sender Message": form.message
                }
            }
            ], function(err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                recordCreated = true;
                recordCreatedFun()
            });
            });

            const recordCreatedFun=()=>{
                if(recordCreated){
                    document.getElementsByClassName("msgform")[0].style.display = "none";
                    document.getElementsByClassName("msgSuccess")[0].style.display = "unset";
                    
                    setTimeout(function() {props.handleClose()}, 4000);
                    //props.handleClose();
                }
            }
           
        
   
            
    }

    const onInputChange =(e)=>{
      
        const name =e.target.name;
        const value = e.target.value;

        setFrom({...form,[name]:value});

    };

    const onAnonymous=(e)=>{

        if(e.target.checked === true){
            setFrom({...form,name:"Annoymous"});
            document.getElementById("senderName").disabled = true;
        }
        else{
            setFrom({...form,name:""});
            document.getElementById("senderName").disabled = false;

        }
    }

    const onEmojiHi =() =>{
        setFrom({...form,message:form.message+String.fromCodePoint(0x1F44B)});
    }
    const onEmojiHeart =() =>{
        setFrom({...form,message:form.message+String.fromCodePoint(0x1F9E1)});
    }
    const onEmojiFire =() =>{
        setFrom({...form,message:form.message+String.fromCodePoint(0x1F525)});
    }
    const onEmojiCat =() =>{
        setFrom({...form,message:form.message+String.fromCodePoint(0x1F63B)});
    }
    
    



    return(
        <div  className="popup-box"> 
           <div className="box">
                <div className="msgform">
                        <h2>Have a Question or Just Want to Say Hi?</h2>
                        <p style={{lineHeight:"1.6rem",marginTop:"1rem"}}> If you have a question, please include your email or contact information so I can respond to you.</p>

                        <div style={{display:"flex", flexDirection:"column",margin:"2rem 0rem"}}>
                                <p style={{marginBottom:"0.4rem"}}>Name</p>
                                <input id='senderName' name='name' autoComplete="new-password" onChange={onInputChange} value={form.name}></input>
                                <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.5rem"}}>
                                    <input style={{height:"2rem"}} type="checkbox" onClick={onAnonymous}/>
                                    <p>Be Anonymous</p>
                                </div>
                                
                            
                        </div>

                        <div style={{display:"flex", flexDirection:"column"}}>
                                <p style={{marginBottom:"0.4rem"}}>Type your message here...</p>
                                <textarea  data-emoji-input="unicode" rows="4" id='senderMsg'  name='message' autoComplete="new-password" onChange={onInputChange} value={form.message}></textarea>
                                
                                <div style={{width:"20px",margin:"0.5rem 0rem",display:"flex"}}>
                                    <button className='backButton' style={{border:"none"}} onClick={onEmojiHi}>
                                            <span style={{fontSize:"24px"}} role="img">
                                                    {String.fromCodePoint(0x1F44B) }
                                            </span>
                                    </button>
                                    <button className='backButton' style={{border:"none"}} onClick={onEmojiHeart}>
                                            <span style={{fontSize:"24px"}} role="img">
                                                    {String.fromCodePoint(0x1F9E1) }
                                            </span>
                                    </button>
                                    <button className='backButton' style={{border:"none"}} onClick={onEmojiFire}>
                                            <span style={{fontSize:"24px"}} role="img">
                                                    {String.fromCodePoint(0x1F525) }
                                            </span>
                                    </button>
                                    <button className='backButton' style={{border:"none"}} onClick={onEmojiCat}>
                                            <span style={{fontSize:"24px"}} role="img">
                                                    {String.fromCodePoint(0x1F63B)}
                                            </span>
                                    </button>  
                                </div>
                            </div>
                            <div style={{display:"flex",justifyContent:"end",gap:"1rem"}}>
                                <button className='primaryBtn' style={{margin:"0px"}} onClick={props.handleClose} >CLOSE</button>
                                <button className='fillBtn' onClick={onHandleSubmit} style={{margin:"0px"}}>SEND</button>

                            </div>
                </div>
                <div className="msgSuccess" >
                    
                         <img  style={{width:"120px",height:"120px"}} src={MsgDelivered} alt="Msg Delivered"></img>


                    <h2> Your Message has been delivered</h2><br/><br/>
                    <p>Thanks <br/>Manohar</p>
                </div>
            </div>
        </div>
    )
}

export default SubmitFrom