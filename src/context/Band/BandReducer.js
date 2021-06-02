import { GET_BANDS, GET_ALBUMS} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_BANDS:
      return {
        ...state,
        bands: payload,
      };
    case GET_ALBUMS:
      return {
        ...state,
        albums: payload,
      };
    default:
      return state;
  }
};
