import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  PROFILE_NOT_FOUND,
  GET_ERRORS
} from './types';

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch({
        type: PROFILE_NOT_FOUND,
        payload: null
      });
    }); // tip: multiple dispatch
};
