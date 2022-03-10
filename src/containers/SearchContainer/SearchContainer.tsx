import React from "react";
import { SearchBox } from "../../components";
import style from "./searchContainer.module.scss";

const SearchContainer: React.FC = () => {
  return (
    <section className={style.searchContainer}>
      <SearchBox />
    </section>
  );
};

export default SearchContainer;
