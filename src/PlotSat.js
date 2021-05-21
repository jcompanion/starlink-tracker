import React from 'react'
import { Cartesian3 } from 'cesium';
import { Entity } from 'resium';


function PlotSat({ sats }) {

  
 
  
  return (
    
    <Entity
    name={sats.spaceTrack.TLE_LINE0.substring(1)}
    position={Cartesian3.fromDegrees(sats.latitude, sats.longitude, sats.height_km)}
    point={{ pixelSize: 10}}
    description={`Last Update: ${sats.spaceTrack.CREATION_DATE}<br> Altutude KM: ${sats.height_km}<br> Latitude: ${sats.latitude}<br> Longitude: ${sats.longitude}<br> Velocity: ${sats.velocity_kms} KMS<br> Launch Date: ${sats.spaceTrack.LAUNCH_DATE}`}> 
    </Entity>
  
  )

   
}

export default PlotSat
