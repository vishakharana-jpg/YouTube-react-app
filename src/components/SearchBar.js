import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

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
    setIsFocused(false);
  };

  return (
    <div className="flex w-full max-w-2xl relative">
      {/* Input */}
      <div className="flex flex-grow border border-gray-300 rounded-l-full overflow-hidden focus-within:border-blue-500 focus-within:shadow-[0_0_0_1px_#3b82f6] transition-all duration-200 bg-white">
        <input
          className="flex-grow px-4 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch(searchQuery)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          placeholder="Search"
        />
        {searchQuery && (
          <button
            onClick={() => { setSearchQuery(""); setSuggestions([]); }}
            className="pr-3 text-gray-400 hover:text-gray-600 text-lg transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Button */}
      <button
        onClick={() => handleSearch(searchQuery)}
        className="border border-l-0 border-gray-300 px-5 rounded-r-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-150 text-gray-700"
      >
        🔍
      </button>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && isFocused && (
        <div className="absolute top-11 left-0 bg-white border border-gray-200 w-full rounded-2xl shadow-xl z-50 overflow-hidden py-2">
          <ul>
            {suggestions.map((s) => (
              <li
                key={s}
                onMouseDown={() => {
                  setSearchQuery(s);
                  handleSearch(s);
                }}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm text-gray-800 transition-colors"
              >
                <span className="text-gray-400 text-xs">🔍</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;