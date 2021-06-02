import React, { useEffect, useContext } from "react";
import BandContext from "../context/Band/BandContext";

const Albums = () => {

  const { albums, getAlbums } = useContext(BandContext)

  useEffect(() => {
    getAlbums()
  }, []);

  return (
    <div className = 'list-group h-100'>
         {
           albums.map((album ,id) => (
             <div className = 'card card-body' key = {id}>
                <h1>{album.name}</h1>
                <p>{album.year}</p>                  
             </div>
           ))
             
         }
    </div>
  )
}

export default Albums;
