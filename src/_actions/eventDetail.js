// disini harus pure return object
import { GET_EVENTS_DETAIL } from "../config/constant";
import axios from "axios";

export const getEventDetail = event_id => {
  return {
    type: GET_EVENTS_DETAIL,
    payload: axios({
      method: "GET",
      url: `http://localhost:5000/api/v1/event/${event_id}`
    })
  };
};
