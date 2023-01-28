import React from "react";
import PT from "prop-types";

import {
  LightgalleryProvider,
  LightgalleryItem
} from "react-lightgallery";



export default function LightGallery(props) {


  var smallerDeviceCheck;
  if(window.innerWidth<1024){
      smallerDeviceCheck= true;
      
  }
  else{
      smallerDeviceCheck= false;
  }


    const GROUP2 = props.elementData;

    const PhotoItem = ({ image, thumb, group }) => (
          <LightgalleryItem style={{width:"100%"}} group={group} src={image} thumb={thumb}>
            <img src={image} style={{ width: "100%",objectFit: "cover",height:"100%",borderRadius: "0.5rem",display: "block"}} alt="Snapshots"  />
          </LightgalleryItem>
      
      );
      PhotoItem.propTypes = {
        image: PT.string.isRequired,
        thumb: PT.string,
        group: PT.string.isRequired
      };
      


    return (
        <div className="content">
     

    
          <LightgalleryProvider>
            
          {GROUP2.map((p, idx) => (
            <div className="cardGroup" style={{width: smallerDeviceCheck?"100%":"47%",display:"inline-block",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat: "no-repeat",marginBottom:"1.2rem",marginRight: "1rem"}}>
              
              <div className="card" style={{padding:"0px",height:"auto",  minHeight:"246px"}}>
                <PhotoItem  key={idx} image={p} group="group2" />
              </div>
              
            </div>
          ))}

           

           
          </LightgalleryProvider>

    </div>
    )
}