import { Dispatch } from "redux";
import { axiosInstance } from "../../api/baseUrl";
import { GET_All_JOBS } from "./actionTypes";

export const getAllJobs =
  (options: { cursor: number }) => async (dispatch: Dispatch) => {
    try {
      const response = await axiosInstance.get(
        `/?cursor=${options.cursor}&limit=12`
      );

      dispatch({ type: GET_All_JOBS, payload: response.data.data.jobs });
    } catch (error) {
      console.log("err", error);
    }
  };
