import { ActionTypes } from "../../types/reduxType/actions";
import {
  GET_All_JOBS,
  LOAD_MORE_JOBS,
  NO_MORE_JOBS,
  LOADING,
  SEARCH_JOB,
} from "../actions/actionTypes";
const initialState = {
  hasMore: true,
  data: [],
  search: [],
  cursor: 12,
  loading: false,
};

const jobsReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_All_JOBS:
      return { ...state, data: action.payload };
    case LOAD_MORE_JOBS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        cursor: state.cursor + 12,
      };
    case NO_MORE_JOBS:
      return { ...state, hasMore: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case SEARCH_JOB:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default jobsReducer;
