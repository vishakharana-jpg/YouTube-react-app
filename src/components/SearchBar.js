import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
    } catch (err) {
      console.log("Search suggestion error");
    }
  };

  const handleSearch = (query) => {
    if (!query) return;
    navigate("/results?query=" + query);
    setSuggestions([]);
  };

  return (
    <div className="flex w-full max-w-2xl relative">
      <input
        className="flex-grow border border-gray-300 p-2 rounded-l-full"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch(searchQuery)}
        placeholder="Search"
      />

      <button
        onClick={() => handleSearch(searchQuery)}
        className="border border-gray-300 px-6 rounded-r-full bg-gray-100"
      >
        🔍
      </button>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="absolute top-10 left-0 bg-white border w-full rounded-lg shadow-lg z-50">
          <ul>
            {suggestions.map((s) => (
              <li
                key={s}
                onClick={() => {
                  setSearchQuery(s);
                  handleSearch(s);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
