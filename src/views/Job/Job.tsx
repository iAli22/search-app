import React from "react";
import { useParams } from "react-router-dom";
import { SearchHistory } from "../../components";
import Spinner from "../../components/Spinner/Spinner";
import { Details } from "../../containers";
import useFetch from "../../helper/useFetch";
import { SecondaryLayout } from "../../layouts";
import style from "./job.module.scss";

interface JobProps {}

const Job: React.FC<JobProps> = () => {
  const { uuid } = useParams();
  const { isLoading, data } = useFetch(`/job/${uuid}`);

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
