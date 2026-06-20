import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-full px-4 max-w-screen-2xl mx-auto">

        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleMenuHandler}
            className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150 text-gray-700 text-xl"
          >
            ☰
          </button>
          <img
            className="h-5 mx-2 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            onClick={() => navigate("/")}
          />
        </div>

        {/* CENTER: SearchBar */}
        <div className="flex justify-center flex-grow px-4 max-w-2xl">
          <SearchBar />
        </div>

        {/* RIGHT: Action buttons + Avatar */}
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150 text-xl" title="Notifications">
            🔔
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150 text-xl" title="Create">
            ➕
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold ml-1 cursor-pointer hover:opacity-90 transition-opacity shadow-sm">
            G
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;