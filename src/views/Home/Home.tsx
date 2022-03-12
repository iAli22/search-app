import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchTitle } from "../../components";
import Spinner from "../../components/Spinner/Spinner";
import { TimeLine } from "../../containers";
import { MainLayout } from "../../layouts";
import { getAllJobs, loadMoreJobs } from "../../redux/actions/jobsAction";
import { Store } from "../../types/reduxType/store";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state: Store) => state.jobs.data);
  useEffect(() => {
    if (jobs.length === 0) {
      dispatch(getAllJobs());
    }
  }, [dispatch]);

  const getMoreJobs = (cursor: number) => {
    dispatch(loadMoreJobs(cursor));
  };

  return (
    <MainLayout>
      {jobs.length > 0 ? (
        <>
          <SearchTitle title="All" count={jobs.length} />
          <TimeLine data={jobs} loadMore={getMoreJobs} />
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </MainLayout>
  );
};

export default Home;
