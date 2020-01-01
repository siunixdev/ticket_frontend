import { GET_CATEGORIES_EVENTS } from "../config/constant";
const initialState = {
  eventCategory: [],
  isLoading: false,
  error: false
};

export const eventCategory = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CATEGORIES_EVENTS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_CATEGORIES_EVENTS}_FULFILLED`:
      return {
        ...state,
        eventCategory: action.payload.data,
        isLoading: false
      };
    case `${GET_CATEGORIES_EVENTS}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
