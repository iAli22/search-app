import React from "react";

interface SearchTitleProps {
  title: string;
  count: number;
}

const SearchTitle: React.FC<SearchTitleProps> = ({ title = "All", count }) => {
  return (
    <div>
      {title} Jobs ({count})
    </div>
  );
};

export default SearchTitle;
