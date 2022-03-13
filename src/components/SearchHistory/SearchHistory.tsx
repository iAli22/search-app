import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Job } from "../../types/reduxType/store";
import style from "./searchHistory.module.scss";

const SearchHistory: React.FC = () => {
  const [history, setHistroy] = useState([]);
  const location = useLocation();

  const memoStorage = useMemo(
    () =>
      JSON.parse(
        // @ts-ignore
        localStorage.getItem("search_history")
      ) || [],
    // eslint-disable-next-line
    [location]
  );

  useEffect(() => {
    setHistroy(memoStorage);
  }, [memoStorage, location]);

  return (
    <aside className={style.searchHistory}>
      <h5>Search History:</h5>

      <ul>
        {history.length > 0 &&
          history.map((data: Job) => (
            <li key={data.id}>
              <Link to={`/jobs/search`} state={data.attributes.title}>
                {data.attributes.title}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default SearchHistory;
