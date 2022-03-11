import React from "react";
import { SearchHistory } from "../../components";
import { Details } from "../../containers";
import { SecondaryLayout } from "../../layouts";
import style from "./job.module.scss";

interface JobProps {}

const Job: React.FC<JobProps> = () => {
  return (
    <SecondaryLayout>
      <h3>title</h3>
      <div className={style.job}>
        <Details type="Jobs" />
        <SearchHistory />
      </div>
    </SecondaryLayout>
  );
};

export default Job;
