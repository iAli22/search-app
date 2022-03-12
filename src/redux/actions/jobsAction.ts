import { Dispatch } from "redux";
import { axiosInstance } from "../../api/baseUrl";
import { Store } from "../../types/reduxType/store";
import {
  GET_All_JOBS,
  LOADING,
  LOAD_MORE_JOBS,
  NO_MORE_JOBS,
  SEARCH_JOB,
} from "./actionTypes";

export const getAllJobs = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });

    const response = await axiosInstance.get(`/?cursor=0&limit=12`);
    dispatch({ type: GET_All_JOBS, payload: response.data.data.jobs });
    dispatch({ type: LOADING, payload: false });
  } catch (error) {
    console.log("err", error);
  }
};
export const loadMoreJobs = (cursor: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });

    const response = await axiosInstance.get(`/?cursor=${cursor}&limit=12`);
    if (response.data.data.jobs.length === 0) {
      dispatch({ type: NO_MORE_JOBS, payload: false });
    } else {
      dispatch({ type: LOAD_MORE_JOBS, payload: response.data.data.jobs });
    }

    dispatch({ type: LOADING, payload: false });
  } catch (error) {
    dispatch({ type: LOADING, payload: false });
    console.log("err", error);
  }
};
export const searchJob = (query: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });

    const response = await axiosInstance.get(
      `${
        query
          ? `/jobs/search?query=${query.toLowerCase()}`
          : `/?cursor=0&limit=12`
      }`
    );

    dispatch({ type: SEARCH_JOB, payload: response.data.data.jobs });

    dispatch({ type: LOADING, payload: false });
  } catch (error) {
    console.log("err", error);
  }
};
