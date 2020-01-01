// disini harus pure return object
import { GET_CATEGORIES_EVENTS } from "../config/constant";
import axios from "axios";

export const getEventCategory = event_id => {
  return {
    type: GET_CATEGORIES_EVENTS,
    payload: axios({
      method: "GET",
      url: `http://localhost:5000/api/v1/category/${event_id}/events`
    })
  };
};
