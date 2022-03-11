import { Job } from "./store";
import {
  GET_All_JOBS,
  LOADING,
  LOAD_MORE_JOBS,
  NO_MORE_JOBS,
  SEARCH_JOB,
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
  | historyTypes
  | LoadMoreTypes
  | SearchJob
  | NoMoreJobs
  | Loading;
