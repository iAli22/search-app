import { ActionTypes } from "../../types/reduxType/actions";
import { Job } from "../../types/reduxType/store";
import { SET_SEARCH_HISTORY } from "../actions/actionTypes";
const initialState: Job[] = [];

const jobsReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_SEARCH_HISTORY:
      return action.payload;
    default:
      return state;
  }
};

export default jobsReducer;
