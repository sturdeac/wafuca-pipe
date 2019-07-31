import { combineReducers } from "redux";
import errorReducer from "./errorsReducer";

export default combineReducers({
    "erros": errorReducer
});
