import React from "react";
import { Link } from "react-router-dom";
import style from "./searchHistory.module.scss";

interface SearchHistoryProps {}

const SearchHistory: React.FC<SearchHistoryProps> = () => {
  return (
    <aside className={style.searchHistory}>
      <h5>Search History:</h5>

      <ul>
        <li>
          <Link to="/">test</Link>
        </li>
        <li>
          <Link to="/">test</Link>
        </li>
        <li>
          <Link to="/">test</Link>
        </li>
        <li>
          <Link to="/">test</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SearchHistory;
