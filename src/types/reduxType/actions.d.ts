import { Job } from "./store";
import {
  GET_All_JOBS,
  LOADING,
  LOAD_MORE_JOBS,
  NO_MORE_JOBS,
  SEARCH_JOB,
} from "../../redux/actions/actionTypes";

// Jobs
export type JobsTypes = {
  type: typeof GET_All_JOBS;
  payload: Job[];
};

export type LoadMoreTypes = {
  type: typeof LOAD_MORE_JOBS;
  payload: Job[];
};
export type SearchJob = {
  type: typeof SEARCH_JOB;
  payload: Job[];
};
export type NoMoreJobs = {
  type: typeof NO_MORE_JOBS;
  payload: boolean;
};
export type Loading = {
  type: typeof LOADING;
  payload: boolean;
};

export type ActionTypes =
  | JobsTypes
  | LoadMoreTypes
  | SearchJob
  | NoMoreJobs
  | Loading;
