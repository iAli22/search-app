import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import histroyReducer from "./histroyReducer";

export default combineReducers({
  jobs: jobsReducer,
  history: histroyReducer,
});
