import React from "react";

import { SearchResult } from "../types/responseTypes/SearchResult";
import "../styles/SelectedCountry.css";

interface SelectedCountryProps {
  selectedCountry: SearchResult;
}

const SelectedCountry: React.FC<SelectedCountryProps> = ({
  selectedCountry,
}): JSX.Element => {
  return (
    <div className="selected-country-container">
      <p className="flag">{selectedCountry.flag}</p>
      <div className="selected-country">
        You have selected {selectedCountry.name}!
      </div>
    </div>
  );
};

export default SelectedCountry;
