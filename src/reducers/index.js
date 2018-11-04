import { combineReducers } from "redux";
import userReducer from "./user";
import eventReducer from "./worldEvent";
import worldReducer from "./world";
import npcReducer from "./npc";

export const rootReducer = combineReducers({
    user: userReducer,
    event: eventReducer,
    world: worldReducer,
    npc: npcReducer,
});
