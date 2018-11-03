import { combineReducers } from "redux";
import userReducer from "./user";
import eventReducer from "./worldEvent";

export const rootReducer = combineReducers({
    user: userReducer,
    event: eventReducer,
});
