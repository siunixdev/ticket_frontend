// disini harus pure return object
import {
  GET_EVENTS,
  GET_EVENTS_TODAY,
  GET_UPCOMING_EVENTS
} from "../config/constant";
import axios from "axios";

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
