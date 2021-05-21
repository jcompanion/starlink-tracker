
import './App.scss';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Viewer } from "resium";
import { createWorldTerrain } from 'cesium';
import PlotSat from './PlotSat'


function App() {
  const url = "https://api.spacexdata.com/v4/starlink";
  const [sat, findSat] = useState([]);
  
  const [isLoading, setLoading] = useState(true);
  const terrainProvider = createWorldTerrain();
 
  // const [isLoading, setisLoading] = useState(true);

  useEffect(() => {

    const fetchItems = async () => {
      const result = await axios(url) 
      findSat(result.data)
      setLoading(false);
    }




    fetchItems();
  }, []);


  if (isLoading) {
  return (
    <div className="Loader">LOADING...</div>
  )
  }

  return (
    <Viewer full terrainProvider={terrainProvider} mode="SCENE3D">

      <h1>Starlink Tracker <i className="fas fa-satellite animated"></i></h1>
      
      {sat.map((sats) => {
        if(sats.longitude !== null) {
        return <PlotSat key={sats.id} isLoading={isLoading} sats={sats}></PlotSat>
        
          }
          return console.log(sats.id + ": Decomissioned")
        }
      )
    }
    </Viewer>
  )

  }



export default App;
