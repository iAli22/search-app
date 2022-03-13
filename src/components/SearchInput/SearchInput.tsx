import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { axiosInstance } from "../../api/baseUrl";
import { Job } from "../../types/reduxType/store";
import SearchIcon from "../icons/SearchIcon";
import style from "./searchInput.module.scss";

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = () => {
  const location = useLocation();
  const [query, setQuery] = useState<any>(location.state || "");
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [autoComplete, setAutoComplete] = useState<Job[] | null>(null);

  const refDropDown = useRef<React.LegacyRef<HTMLDivElement> | undefined>();

  const setHistorySearch = (search: Job) => {
    location.state = search.attributes.title;
    setShowDropDown(false);

    // @ts-ignore
    const oldSearch = JSON.parse(localStorage.getItem("search_history"));
    if (oldSearch) {
      // if item already there and item number
      const found = oldSearch.some((item: Job) => item.id === search.id);
      if (!found) {
        localStorage.setItem(
          "search_history",
          JSON.stringify([...oldSearch, search])
        );
        // @ts-ignore
        const newSearch = JSON.parse(localStorage.getItem("search_history"));
        // More than 12 item
        if (newSearch.length > 12) {
          newSearch.shift();
          localStorage.setItem(
            "search_history",
            JSON.stringify([...newSearch])
          );
        }
      }
    } else {
      localStorage.setItem("search_history", JSON.stringify([search]));
    }
  };
  const getAutoComplete = async (query: string) => {
    try {
      const res = await axiosInstance.get(
        `/jobs/search?query=${query.toLowerCase()}`
      );
      setAutoComplete(res.data.data.jobs);
    } catch (error) {
      console.log(error);
    }
  };
  // Show AutoComplete Dropdown
  useEffect(() => {
    // @ts-ignore
    document.addEventListener("mousedown", handleClickOutsideDropDown);
    return () => {
      // @ts-ignore
      document.removeEventListener("mousedown", handleClickOutsideDropDown);
    };
  }, []);

  useEffect(() => {
    const debounceFn = setTimeout(() => {
      if (query.length >= 3 && query !== location.state) {
        setShowDropDown(true);

        getAutoComplete(query);
      }

      if (query.length === 0 && location.state) {
        console.log("there is no term");
        // location.state = null;
        //   remove term after searching
      }
    }, 1000);

    return () => clearTimeout(debounceFn);
  }, [query, location]);

  const handleClickOutsideDropDown = (event: React.MouseEvent) => {
    // @ts-ignore
    if (refDropDown && !refDropDown.current?.contains(event.target)) {
      setShowDropDown(false);
    }
  };

  return (
    <div className={style.searchInput}>
      <input
        type="text"
        placeholder="Search Keyword"
        className={style.searchInput__input}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        data-testid="search-input"
      />
      <button className={style.searchInput__btn}>
        <SearchIcon height={30} width={30} fill="#888" />
      </button>

      {showDropDown && (
        <div
          className={style.searchInput__autoComplete}
          // @ts-ignore
          ref={refDropDown}
          data-testid="dropdown-list"
        >
          <div className={style.searchInput__autoComplete_body}>
            <ul>
              {autoComplete &&
                autoComplete.length > 0 &&
                autoComplete.map((res) => (
                  <li key={res.id}>
                    <Link
                      to={`/jobs/search`}
                      state={res.attributes.title}
                      onClick={() => setHistorySearch(res)}
                      data-testid="dropdown-item"
                    >
                      {res.attributes.title}
                    </Link>
                  </li>
                ))}
              {autoComplete && autoComplete.length === 0 && <h4>No Results</h4>}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
