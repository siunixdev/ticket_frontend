// disini harus pure return object
import {
  SIGNUP,
  SIGN,
  USER_DETAIL,
  USER_EVENTS_FAVORITES,
  USER_SET_LIKE_EVENT,
  USER_PROFILE_UPDATE
} from "../config/constant";
import axios from "axios";

export const signup = user => {
  return {
    type: SIGNUP,
    payload: axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/signup/",
      data: user
    })
  };
};

export const sign = user => {
  return {
    type: SIGN,
    payload: axios({
      method: "POST",
      url: `http://localhost:5000/api/v1/sign`,
      data: user
    })
  };
};

export const getUserProfil = () => {
  let token = localStorage.getItem("token");
  token = "Bearer " + token;
  return {
    type: USER_DETAIL,
    payload: axios({
      method: "GET",
      url: `http://localhost:5000/api/v1/profile`,
      headers: {
        Authorization: token
      }
    })
  };
};

export const getUserEventsfavorites = () => {
  let token = localStorage.getItem("token");
  token = "Bearer " + token;
  return {
    type: USER_EVENTS_FAVORITES,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/profile/favorites",
      headers: {
        Authorization: token
      }
    })
  };
};

export const userSetLikeEvent = eventData => {
  let token = localStorage.getItem("token");
  token = "Bearer " + token;
  return {
    type: USER_SET_LIKE_EVENT,
    payload: axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/favorite/",
      headers: {
        Authorization: token
      },
      data: eventData
    })
  };
};

export const updateProfile = user => {
  let token = localStorage.getItem("token");
  token = "Bearer " + token;
  return {
    type: USER_PROFILE_UPDATE,
    payload: axios({
      method: "PUT",
      url: `http://localhost:5000/api/v1/profile/`,
      headers: {
        Authorization: token
      },
      data: user
    })
  };
};
