import { SearchResult } from "../types/responseTypes/SearchResult";

export const fetchData = async (query: string): Promise<SearchResult[]> => {
  const response = await fetch(
    `http://localhost:8000/api/search?query=${query}`
  );
  const data = await response.json();
  return data;
};
