import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchTitle } from "../../components";
import { TimeLine } from "../../containers";
import { MainLayout } from "../../layouts";
import { setSearchHistory } from "../../redux/actions/historyAction";
import { getAllJobs } from "../../redux/actions/jobsAction";
import { Store } from "../../types/reduxType/store";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state: Store) => state.jobs);
  useEffect(() => {
    dispatch(getAllJobs({ cursor: 0 }));
  }, [dispatch]);

  return (
    <MainLayout>
      <SearchTitle title="All" count={200} />
      <TimeLine />
    </MainLayout>
  );
};

export default Home;
