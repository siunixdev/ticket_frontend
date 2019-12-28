import { createStore, combineReducers, applyMiddleware } from "redux";

import { categories } from "../_reducer/categories";
import { events } from "../_reducer/events";
import { eventDetail } from "../_reducer/eventDetail";

import { logger, promise } from "./middleware";

// GET all reducer available
// Global state come from here
const rootReducers = combineReducers({
  categories,
  events,
  eventDetail
});

// setup store redux
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
