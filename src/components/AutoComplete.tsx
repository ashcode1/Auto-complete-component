import React, { useState, ChangeEvent, useEffect } from "react";

import "../styles/AutoComplete.css";
import { SearchResult } from "../types/responseTypes/SearchResult";
import { fetchData } from "../utils/fetchData";
import SelectedCountry from "./SelectedCountry";
import DropDownList from "./DropDownList";

const AutoComplete: React.FC = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<SearchResult | null>(
    null
  );

  const TEXT = {
    instruction: "Start typing to search for a country:",
    loading: "Loading...",
  };

  useEffect(() => {
    if (!inputValue) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    fetchData(inputValue).then((data) => {
      setSuggestions(data);
      setLoading(false);
    });
  }, [inputValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCountry(null);
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (country: SearchResult) => {
    setSelectedCountry(country);
    setSuggestions([]);
  };

  return (
    <div className="container-full">
      <div className="autocomplete">
        <h1 className="instruction">{TEXT.instruction}</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="autocomplete-input"
        />

        {loading ? <div className="loading">{TEXT.loading}</div> : null}

        {suggestions?.length ? (
          <DropDownList<SearchResult>
            matcher={inputValue}
            list={suggestions}
            handleClick={handleSuggestionClick}
            numOfItems={5}
          />
        ) : null}

        {selectedCountry ? (
          <SelectedCountry selectedCountry={selectedCountry} />
        ) : null}
      </div>
    </div>
  );
};

export default AutoComplete;
