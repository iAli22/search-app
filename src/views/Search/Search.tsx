import React from "react";
import { SearchHistory, SearchTitle } from "../../components";
import { TimeLine } from "../../containers";
import { MainLayout } from "../../layouts";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <MainLayout>
      <SearchTitle title="Test" count={200} />
      <TimeLine>
        <SearchHistory />
      </TimeLine>
    </MainLayout>
  );
};

export default Search;
