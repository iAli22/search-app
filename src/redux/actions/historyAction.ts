import { Dispatch } from "redux";
import { Job } from "../../types/reduxType/store";
import { SET_SEARCH_HISTORY } from "./actionTypes";

export const setSearchHistory = (term: Job) => (dispatch: Dispatch) => {
  dispatch({ type: SET_SEARCH_HISTORY, payload: term });
};
