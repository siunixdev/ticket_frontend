// disini harus pure return object
import { GET_EVENTS, GET_EVENTS_DETAIL } from "../config/constant";
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
