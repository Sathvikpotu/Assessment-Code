import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import todoData from "./TodoReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  todoData
});

export default rootReducer;
