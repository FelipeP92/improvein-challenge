import React, {useState, useEffect, useContext } from "react";
import BandContext from '../context/Band/BandContext'


const BandsList = () => {

  const bandContext = useContext(BandContext)


  useEffect(() => {
    bandContext.getBands()
  }, []);

  return (
    <div className = 'list-group h-100'>
         {
           bandContext.bands.map((band ,id) => (
             <div className = 'card card-body' key = {id}>
                <h1>{band.name}</h1>
                <h2>{band.genreCode}</h2>
                <p>{`${band.country} ${band.year}`}</p>                  
             </div>
           ))
             
         }
    </div>
  )
}

export default BandsList;
