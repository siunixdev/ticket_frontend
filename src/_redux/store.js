import { createStore, combineReducers, applyMiddleware } from "redux";

// Reducer, diambil dari directory reducer
import { categories, categoryDetail } from "../_reducer/categories";
import { events, eventsToday, upcomingEvents } from "../_reducer/events";
import { eventDetail } from "../_reducer/eventDetail";
import { eventCategory } from "../_reducer/eventCategory";
import {
  userSign,
  userSignup,
  userDetail,
  userEventsfavorites,
  userProfileUpdate
  // userSetLikeEvent
} from "../_reducer/user";

// Middleware
import { logger, promise } from "./middleware";

// GET all reducer available
// Global state come from here
const rootReducers = combineReducers({
  categories,
  events,
  eventsToday,
  upcomingEvents,
  eventDetail,
  eventCategory,
  categoryDetail,
  userSign,
  userSignup,
  userDetail,
  userEventsfavorites,
  userProfileUpdate
  // userSetLikeEvent
});

// setup store redux
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
