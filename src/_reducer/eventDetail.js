import { GET_EVENTS_DETAIL } from "../config/constant";
const initialState = {
  data: [],
  isLoading: false,
  error: false
};

export const eventDetail = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_EVENTS_DETAIL}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENTS_DETAIL}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${GET_EVENTS_DETAIL}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
