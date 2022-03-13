import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { SearchHistory, SearchTitle } from "../../components";
import Spinner from "../../components/Spinner/Spinner";
import { TimeLine } from "../../containers";
import { MainLayout } from "../../layouts";
import { searchJob } from "../../redux/actions/jobsAction";
import { Store } from "../../types/reduxType/store";

const Search: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const jobs = useSelector((state: Store) => state.jobs.search);
  const loading = useSelector((state: Store) => state.jobs.loading);

  useEffect(() => {
    // If no search term get all data
    if (!location.state && jobs.length === 0) {
      dispatch(searchJob(""));
    } else if (location.state) {
      dispatch(searchJob(location.state));
    }
    // eslint-disable-next-line
  }, [location, dispatch]);

  return (
    <MainLayout>
      {(jobs.length > 0 || !loading) && (
        <>
          <SearchTitle title={location.state ?? "All"} count={jobs.length} />

          <TimeLine data={jobs}>
            <SearchHistory />
          </TimeLine>
        </>
      )}

      {jobs.length === 0 && !loading && <h4>No Results</h4>}

      {jobs.length === 0 && <Spinner />}
    </MainLayout>
  );
};

export default Search;
