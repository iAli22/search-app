import { Job } from "./store";
import {
  GET_All_JOBS,
  SET_SEARCH_HISTORY,
} from "../../redux/actions/actionTypes";

// Jobs
export type JobsTypes = {
  type: typeof GET_All_JOBS;
  payload: Job[];
};
export type historyTypes = {
  type: typeof SET_SEARCH_HISTORY;
  payload: Job[];
};

export type ActionTypes = JobsTypes | historyTypes;
