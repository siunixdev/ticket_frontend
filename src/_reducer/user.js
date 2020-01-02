import {
  SIGNUP,
  SIGN,
  USER_DETAIL,
  USER_EVENTS_FAVORITES,
  USER_SET_LIKE_EVENT,
  USER_PROFILE_UPDATE
} from "../config/constant";

const initialState = {
  data: [],
  isLoading: false,
  isPost: false,
  error: false
};

const initialFavoriteState = {
  dataFavorites: [],
  isLoadingFavorites: false,
  isPostFavorites: false,
  errorFavorites: false
};

const initialLikeEventState = {
  dataLike: [],
  isLoadingLike: false,
  isPostLike: false,
  errorLike: false
};

const initialProfileUpdateState = {
  dataProfileUpdate: [],
  isLoadingProfileUpdate: false,
  isPostProfileUpdate: false,
  errorProfileUpdate: false
};

export const userSignup = (state = initialState, action) => {
  switch (action.type) {
    case `${SIGNUP}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isPost: true
      };
    case `${SIGNUP}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${SIGNUP}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export const userSign = (state = initialState, action) => {
  switch (action.type) {
    case `${SIGN}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isPost: true
      };
    case `${SIGN}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${SIGN}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export const userDetail = (state = initialState, action) => {
  switch (action.type) {
    case `${USER_DETAIL}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${USER_DETAIL}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${USER_DETAIL}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export const userEventsfavorites = (state = initialFavoriteState, action) => {
  switch (action.type) {
    case `${USER_EVENTS_FAVORITES}_PENDING`:
      return {
        ...state,
        isLoadingFavorites: true
      };
    case `${USER_EVENTS_FAVORITES}_FULFILLED`:
      return {
        ...state,
        dataFavorites: action.payload.data,
        isLoadingFavorites: false
      };
    case `${USER_EVENTS_FAVORITES}_REJECTED`:
      return {
        ...state,
        errorFavorites: true,
        isLoadingFavorites: false
      };
    default:
      return state;
  }
};

export const userSetLikeEvent = (state = initialLikeEventState, action) => {
  switch (action.type) {
    case `${USER_SET_LIKE_EVENT}_PENDING`:
      return {
        ...state,
        isLoadingLike: true
      };
    case `${USER_SET_LIKE_EVENT}_FULFILLED`:
      return {
        ...state,
        dataLike: action.payload.data,
        isLoadingLike: false
      };
    case `${USER_SET_LIKE_EVENT}_REJECTED`:
      return {
        ...state,
        errorLike: true,
        isLoadingLike: false
      };
    default:
      return state;
  }
};

export const userProfileUpdate = (
  state = initialProfileUpdateState,
  action
) => {
  switch (action.type) {
    case `${USER_PROFILE_UPDATE}_PENDING`:
      return {
        ...state,
        isLoadingProfileUpdate: true
      };
    case `${USER_PROFILE_UPDATE}_FULFILLED`:
      return {
        ...state,
        dataProfileUpdate: action.payload.data,
        isLoadingProfileUpdate: false
      };
    case `${USER_PROFILE_UPDATE}_REJECTED`:
      return {
        ...state,
        errorProfileUpdate: true,
        isLoadingProfileUpdate: false
      };
    default:
      return state;
  }
};
