import { combineReducers } from "redux";
import dataBaseReducer from "./dataBase";
//import behaveReducer from "./behave";

export default combineReducers({
    dataBase: dataBaseReducer,
   // behave: behaveReducer,
});
