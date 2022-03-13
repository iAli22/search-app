import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { SearchHistory } from "../../components";
import Spinner from "../../components/Spinner/Spinner";
import { Details } from "../../containers";
import useFetch from "../../helper/useFetch";
import { SecondaryLayout } from "../../layouts";
import { Job as JobType } from "../../types/reduxType/store";
import style from "./job.module.scss";

interface JobProps {}

const Job: React.FC<JobProps> = () => {
  const { uuid } = useParams();
  const { isLoading, data } = useFetch(`/job/${uuid}`);

  const setJobsStorage = useCallback(() => {
    // every new job will put it in localStorage to match it with related

    // @ts-ignore
    const oldJobs = JSON.parse(localStorage.getItem("jobs"));

    if (Object.keys(data).length > 0) {
      if (oldJobs) {
        // if item already there and item number
        const found = oldJobs.some((item: JobType) => item.id === data.job.id);
        if (!found) {
          localStorage.setItem("jobs", JSON.stringify([...oldJobs, data.job]));
        }
      } else {
        localStorage.setItem("jobs", JSON.stringify([data.job]));
      }
    }
  }, [data]);

  setJobsStorage();

  return (
    <SecondaryLayout>
      {isLoading && data.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <h3>{data.job?.attributes?.title}</h3>
          <div className={style.job}>
            <Details type="Skills" data={data.job?.relationships?.skills} />
            <SearchHistory />
          </div>
        </>
      )}
    </SecondaryLayout>
  );
};

export default Job;
