import { ActionTypes } from "../../types/reduxType/actions";
import { Job } from "../../types/reduxType/store";
import { GET_All_JOBS } from "../actions/actionTypes";
const initialState: Job[] = [];

const jobsReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_All_JOBS:
      return action.payload;
    default:
      return state;
  }
};

export default jobsReducer;
