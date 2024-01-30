import React from "react";

import "../styles/DropDownList.css";

interface ListItem {
  id: number;
  name: string;
}

interface DropDownListProps<T> {
  matcher: string;
  list: T[];
  handleClick: (item: T) => void;
  numOfItems: number;
}

const DropDownList = <T extends ListItem>({
  matcher,
  list,
  handleClick,
  numOfItems,
}: DropDownListProps<T>) => {
  return (
    <ul className="list">
      {list.slice(0, numOfItems).map((item) => (
        <li
          key={item.id}
          className="list-item"
          onClick={() => handleClick(item)}
        >
          {item.name
            .split(new RegExp(`(${matcher})`, "gi"))
            .map((part, index) =>
              part.toLowerCase() === matcher.toLowerCase() ? (
                <b key={index}>{part}</b>
              ) : (
                part
              )
            )}
        </li>
      ))}
    </ul>
  );
};

export default DropDownList;
