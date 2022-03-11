import React from "react";
import style from "./searchTitle.module.scss";
interface SearchTitleProps {
  title: string;
  count: number;
}

const SearchTitle: React.FC<SearchTitleProps> = ({ title = "All", count }) => {
  return (
    <div className={style.searchTitle}>
      <h3>
        {title} Jobs ({count})
      </h3>
    </div>
  );
};

export default SearchTitle;
