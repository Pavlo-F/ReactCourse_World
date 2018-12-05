import { combineReducers } from "redux";
import dataBaseReducer from "./dataBase";
import statisticsReducer from "./statistics";

export default combineReducers({
    dataBase: dataBaseReducer,
    statistics: statisticsReducer,
});
