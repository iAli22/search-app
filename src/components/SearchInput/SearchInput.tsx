import React from "react";
import SearchIcon from "../icons/SearchIcon";
import style from "./searchInput.module.scss";

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <div className={style.searchInput}>
      <input
        type="text"
        placeholder="Search Keyword"
        className={style.searchInput__input}
        autoFocus
        list="browsers"
      />
      <button className={style.searchInput__btn}>
        <SearchIcon height={30} width={30} fill="#888" />
      </button>

      {/* <datalist id="browsers">
        <option value="Edge">Edge</option>
        <option value="Firefox">Firefox</option>
        <option value="Chrome">Chrome</option>
        <option value="Opera">Opera</option>
        <option value="Safari">Safari</option>
      </datalist> */}
      <div className={style.searchInput__autoComplete}>
        <div className={style.searchInput__autoComplete_body}>
          <ul>
            <li>res</li>
            <li>res</li>
            <li>res</li>
            <li>res</li>
            <li>res</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
