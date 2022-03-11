import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchHistory, SearchTitle } from "../../components";
import Spinner from "../../components/Spinner/Spinner";
import { TimeLine } from "../../containers";
import { MainLayout } from "../../layouts";
import { getAllJobs } from "../../redux/actions/jobsAction";
import { Store } from "../../types/reduxType/store";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state: Store) => state.jobs.data);
  //  !  if there is no search happen i will get data from [jobs]
  //  ! else go make search request
  useEffect(() => {
    // If no search term get all data
    if (jobs.length === 0) {
      dispatch(getAllJobs());
    }
  }, [dispatch]);

  return (
    <MainLayout>
      {jobs.length > 0 ? (
        <>
          <SearchTitle title="All" count={jobs.length} />

          <TimeLine data={jobs}>
            <SearchHistory />
          </TimeLine>
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </MainLayout>
  );
};

export default Search;
