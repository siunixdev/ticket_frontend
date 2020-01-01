import { GET_CATEGORIES, GET_CATEGORY_DETAIL } from "../config/constant";
const initialState = {
  data: [],
  isLoading: false,
  error: false
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CATEGORIES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_CATEGORIES}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${GET_CATEGORIES}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export const categoryDetail = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CATEGORY_DETAIL}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_CATEGORY_DETAIL}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${GET_CATEGORY_DETAIL}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
