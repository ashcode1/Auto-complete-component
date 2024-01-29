import React, { useState, ChangeEvent, useEffect } from "react";

import "../styles/AutoComplete.css";

const AutoComplete: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("inputValue: ", inputValue);
  });

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
      </div>
    </div>
  );
};

export default AutoComplete;
