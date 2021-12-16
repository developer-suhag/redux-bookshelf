import { combineReducers, createStore } from "redux";
import bookReducer from "./reducers/bookReducer";

const rootReducer = combineReducers({
  books: bookReducer,
});

const store = createStore(rootReducer);

export default store;
