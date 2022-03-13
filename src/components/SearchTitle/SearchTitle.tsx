import React from "react";
import style from "./searchTitle.module.scss";
interface SearchTitleProps {
  title: string | null | unknown;
  count: number;
}

const SearchTitle: React.FC<SearchTitleProps> = ({ title, count }) => {
  return (
    <div className={style.searchTitle}>
      <h3>
        {title} Jobs (<span data-testid="data-count">{count}</span>)
      </h3>
    </div>
  );
};

export default SearchTitle;
