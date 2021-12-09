import { combineReducers } from "redux";

import { todoReducer } from "./todoReducer";
import { tokenReducer } from "./tokenReducer";

export default combineReducers({ todoReducer, tokenReducer });
