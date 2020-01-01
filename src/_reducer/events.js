import {
  GET_EVENTS,
  GET_EVENTS_TODAY,
  GET_UPCOMING_EVENTS
} from "../config/constant";
const initialState = {
  events: [],
  isLoading: false,
  error: false
};

const initialStateUpcoming = {
  eventsUpcoming: [],
  isLoadingUpcoming: false,
  errorUpcoming: false
};

export const events = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_EVENTS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENTS}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        events: action.payload.data,
        isLoading: false
      };
    case `${GET_EVENTS}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export const eventsToday = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_EVENTS_TODAY}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENTS_TODAY}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        events: action.payload.data,
        isLoading: false
      };
    case `${GET_EVENTS_TODAY}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export const upcomingEvents = (
  stateUpcoming = initialStateUpcoming,
  action
) => {
  switch (action.type) {
    case `${GET_UPCOMING_EVENTS}_PENDING`:
      return {
        ...stateUpcoming,
        isLoadingUpcoming: true
      };
    case `${GET_UPCOMING_EVENTS}_FULFILLED`:
      console.log(action.payload);
      return {
        ...stateUpcoming,
        eventsUpcoming: action.payload.data,
        isLoadingUpcoming: false
      };
    case `${GET_UPCOMING_EVENTS}_REJECTED`:
      return {
        ...stateUpcoming,
        errorUpcoming: true,
        isLoadingUpcoming: false
      };
    default:
      return stateUpcoming;
  }
};
