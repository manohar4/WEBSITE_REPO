import React, { useState } from "react";
import PT from "prop-types";
import ReactDOM from "react-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Row';
import {
  LightgalleryProvider,
  LightgalleryItem,
  withLightgallery,
  useLightgallery
} from "react-lightgallery";



export default function LightGallery(props) {

    const GROUP2 = props.elementData;

    const PhotoItem = ({ image, thumb, group }) => (
        
          <LightgalleryItem style={{width:"100%"}} group={group} src={image} thumb={thumb}>
            <img src={image} style={{ width: "100%",objectFit: "cover",height:"100%",borderRadius: "0.5rem",    display: "block"}}  />
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
            <div className="cardGroup" style={{width:"48%",display:"inline-block",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat: "no-repeat",marginBottom:"2rem",marginRight: "0.5rem"}}>
              
              <div className="card" style={{padding:"0px",height:"auto"}}>
                <PhotoItem  key={idx} image={p} group="group2" />
              </div>
              
            </div>
          ))}

           

           
          </LightgalleryProvider>

    </div>
    )
}