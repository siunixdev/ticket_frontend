import { createStore, combineReducers, applyMiddleware } from "redux";

// Reducer, diambil dari directory reducer
import { categories, categoryDetail } from "../_reducer/categories";
import {
  events,
  eventsToday,
  upcomingEvents,
  addEvent
} from "../_reducer/events";
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
import {
  pendingOrder,
  newOrder,
  pendingOrderDetail,
  confirmOrder,
  approvedOrder
} from "../_reducer/payment";

// Middleware
import { logger, promise } from "./middleware";

// GET all reducer available
// Global state come from here
const rootReducers = combineReducers({
  categories,
  events,
  addEvent,
  eventsToday,
  upcomingEvents,
  eventDetail,
  eventCategory,
  categoryDetail,
  userSign,
  userSignup,
  userDetail,
  userEventsfavorites,
  userProfileUpdate,
  pendingOrder,
  newOrder,
  pendingOrderDetail,
  confirmOrder,
  approvedOrder
  // userSetLikeEvent
});

// setup store redux
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
