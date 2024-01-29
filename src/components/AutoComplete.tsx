import React, { useState, ChangeEvent, useEffect } from "react";

import "../styles/AutoComplete.css";
import { SearchResult } from "../types/responseTypes/SearchResult";
import { fetchData } from "../utils/fetchData";

const AutoComplete: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
    setInputValue(event.target.value);
  };

  return (
    <div className="container-full">
      <div className="autocomplete">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="autocomplete-input"
        />
        {loading && <div className="loading">Loading...</div>}
        {suggestions?.length ? (
          <ul className="suggestions-list">
            {suggestions.slice(0, 5).map((suggestion) => (
              <li key={suggestion.id} className="suggestion-item">
                {suggestion.name
                  .split(new RegExp(`(${inputValue})`, "gi"))
                  .map((part, index) =>
                    part.toLowerCase() === inputValue.toLowerCase() ? (
                      <b key={index}>{part}</b>
                    ) : (
                      part
                    )
                  )}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default AutoComplete;
