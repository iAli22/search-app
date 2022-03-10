import React from "react";
import style from "./searchHistory.module.scss";

interface SearchHistoryProps {}

const SearchHistory: React.FC<SearchHistoryProps> = () => {
  return <div className={style.searchHistory}>SearchHistory</div>;
};

export default SearchHistory;
