// disini harus pure return object
import {
  ADD_EVENTS,
  GET_EVENTS,
  GET_EVENTS_TODAY,
  GET_UPCOMING_EVENTS,
  GET_EVENTS_SEARCH
} from "../config/constant";
import axios from "axios";

export const addEvent = event => {
  let token = localStorage.getItem("token");
  token = "Bearer " + token;
  return {
    type: ADD_EVENTS,
    payload: axios({
      method: "POST",
      url: `http://localhost:5000/api/v1/event/`,
      headers: {
        Authorization: token
      },
      data: event
    })
  };
};

export const getEvents = () => {
  return {
    type: GET_EVENTS,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/events"
    })
  };
};

export const getEventsToday = () => {
  return {
    type: GET_EVENTS_TODAY,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/today/events"
    })
  };
};

export const getUpcomingEvents = () => {
  return {
    type: GET_UPCOMING_EVENTS,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/upcoming/events"
    })
  };
};

export const getEventSearch = data => {
  return {
    type: GET_EVENTS_SEARCH,
    payload: axios({
      method: "GET",
      url: `http://localhost:5000/api/v1/events/search?title=${data}`
    })
  };
};
