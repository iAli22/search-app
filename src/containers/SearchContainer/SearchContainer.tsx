import React from "react";
import { SearchInput } from "../../components";
import style from "./searchContainer.module.scss";

const SearchContainer: React.FC = () => {
  return (
    <section className={style.searchContainer}>
      <SearchInput />
    </section>
  );
};

export default SearchContainer;
