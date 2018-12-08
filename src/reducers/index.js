import { combineReducers } from "redux";
import dataBaseReducer from "./dataBase";

export default combineReducers({
    dataBase: dataBaseReducer,
});
