import React, { useReducer } from 'react';
import axios from 'axios';

import BandContext from './BandContext';
import BandReducer from './BandReducer';

import { GET_BANDS, GET_ALBUMS } from '../types';

const BandState = (props) => {
  const initialState = {
    bands: [],
    albums: [],
  };

  const [state, dispatch] = useReducer(BandReducer, initialState);

  const getBands = async () => {
    try {
      const res = await axios.get('https://my-json-server.typicode.com/improvein/dev-challenge/bands');
      const data = res.data;
      dispatch({ type: GET_BANDS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getAlbums = async () => {
    try {
      const res = await axios.get('https://my-json-server.typicode.com/improvein/dev-challenge/albums');
      const { data }= res;
      dispatch({ type: GET_ALBUMS ,payload: data });
    } catch (error) {}
  };

  return (
    <BandContext.Provider
      value={{
        bands: state.bands,
        albums: state.albums,
        getBands,
        getAlbums,
      }}
    >
      {props.children}
    </BandContext.Provider>
  );
};

export default BandState;
