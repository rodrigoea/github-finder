import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchUser, searchClear } from "../../store/ducks/search";

import SearchResultsList from "../SearchResultsList";
import Spinner from "../Spinner";

const TYPING_TIMEOUT = 500;
const MIN_TEXT_LENGTH = 3;

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.search);
  const hasResults = !!data.items;

  const handleSearch = (e) => {
    const { value } = e.target;
    setInputValue(value);

    if (value === "") {
      dispatch(searchClear());
    }
  };

  const clearInput = () => {
    setTimeout(() => {
      setInputValue("");
      dispatch(searchClear());
    }, 100);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputValue.length >= MIN_TEXT_LENGTH) {
        dispatch(searchUser(inputValue));
      }
    }, TYPING_TIMEOUT);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  const renderSearch = () => {
    return (
      <div className="relative">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          GitHub Username
        </label>
        <div className="relative flex items-center">
          <input
            className="transition duration-300 appearance-none block shadow-md hover:shadow-lg w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="rodrigolabs"
            onChange={handleSearch}
            value={inputValue}
            onBlur={clearInput}
          />

          {isLoading && (
            <div className="absolute right-0 mr-2">
              <Spinner size="small" />
            </div>
          )}
        </div>
        {hasResults && <SearchResultsList data={data} />}
      </div>
    );
  };

  return (
    <>
      <div className="container m-auto py-10 lg:py-16">
        <h2 className="text-center font-hairline text-3xl lg:text-5xl">
          Easily find <span className="font-bold">any</span> Github user.
        </h2>
        <div className="w-full md:w-1/2 px-3 mx-auto mt-6 mb-6">
          {renderSearch()}
        </div>
      </div>
      <div className="border-b" />
    </>
  );
};

export default Header;
