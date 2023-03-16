import { useState, useEffect } from "react";
import GifDetail from "./GifDetail";

// Importing search helper method
import search from "../utils/API";

const SearchResults = () => {
  // Declaring a new state variable, "results"
  const [results, setResults] = useState([]);

  // Method to get search results & set state
  const searchGiphy = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };

  // Running this method when the component first loads so that we have images of 'x category' to display
  // The second argument is the dependency array, meaning that this method will only run when the component first loads
  useEffect(() => {
    searchGiphy("crazy people");
  }, []);

  // Passing results to the GifDetail component to map over
  return <GifDetail results={results} />;
};

export default SearchResults;
