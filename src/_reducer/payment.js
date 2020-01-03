import {
  GET_PENDING_ORDER,
  USER_SET_ORDER,
  GET_PENDING_ORDER_DETAIL,
  USER_SET_CONFIRM_ORDER
} from "../config/constant";

const initialState = {
  payment: [],
  confirm: [],
  isLoading: false,
  error: false
};

export const pendingOrder = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PENDING_ORDER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_PENDING_ORDER}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        payment: action.payload.data,
        isLoading: false
      };
    case `${GET_PENDING_ORDER}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export const newOrder = (state = initialState, action) => {
  switch (action.type) {
    case `${USER_SET_ORDER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${USER_SET_ORDER}_FULFILLED`:
      return {
        ...state,
        payment: action.payload.data,
        isLoading: false
      };
    case `${USER_SET_ORDER}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export const pendingOrderDetail = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PENDING_ORDER_DETAIL}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_PENDING_ORDER_DETAIL}_FULFILLED`:
      return {
        ...state,
        payment: action.payload.data,
        isLoading: false
      };
    case `${GET_PENDING_ORDER_DETAIL}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export const confirmOrder = (state = initialState, action) => {
  switch (action.type) {
    case `${USER_SET_CONFIRM_ORDER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${USER_SET_CONFIRM_ORDER}_FULFILLED`:
      return {
        ...state,
        confirm: action.payload.data,
        isLoading: false
      };
    case `${USER_SET_CONFIRM_ORDER}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
