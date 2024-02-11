import expenseReducer from "./expenseReducer";
import statsReducer from "./statsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  expense: expenseReducer,
  stats: statsReducer,
});

export default rootReducer;
