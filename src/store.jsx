import { combineReducers, createStore } from "redux";
import accountReducer from "./store/accountSlice";
import customerReducer from "./store//customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
