import {
  ADD_EVENTS,
  GET_EVENTS,
  GET_EVENTS_TODAY,
  GET_UPCOMING_EVENTS,
  GET_EVENTS_SEARCH
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

const initialStateSearch = {
  eventsSearch: [],
  isLoadingSearch: false,
  errorSearch: false
};

const initialStateAddEvent = {
  dataAddEvent: [],
  isLoadingAddEvent: false,
  isPostAddEvent: false,
  errorAddEvent: false
};

export const addEvent = (state = initialStateAddEvent, action) => {
  switch (action.type) {
    case `${ADD_EVENTS}_PENDING`:
      return {
        ...state,
        isLoadingAddEvent: true,
        isPostAddEvent: true
      };
    case `${ADD_EVENTS}_FULFILLED`:
      return {
        ...state,
        dataAddEvent: action.payload.data,
        isLoadingAddEvent: false,
        isPostAddEvent: false
      };
    case `${ADD_EVENTS}_REJECTED`:
      return {
        ...state,
        errorAddEvent: true,
        isLoadingAddEvent: false
      };
    default:
      return state;
  }
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

export const searchEvents = (stateSearch = initialStateSearch, action) => {
  switch (action.type) {
    case `${GET_EVENTS_SEARCH}_PENDING`:
      return {
        ...stateSearch,
        isLoadingSearch: true
      };
    case `${GET_EVENTS_SEARCH}_FULFILLED`:
      console.log(action.payload);
      return {
        ...stateSearch,
        eventsSearch: action.payload.data,
        isLoadingSearch: false
      };
    case `${GET_EVENTS_SEARCH}_REJECTED`:
      return {
        ...stateSearch,
        errorSearch: true,
        isLoadingSearch: false
      };
    default:
      return stateSearch;
  }
};
