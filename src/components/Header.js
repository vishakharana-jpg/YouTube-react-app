import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu()); // ✅ sidebar toggle logic safe
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 bg-white border-b">
      <div className="flex items-center justify-between h-full px-4">

        {/* LEFT: Sidebar + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMenuHandler}
            className="text-lg cursor-pointer p-2 rounded-full hover:bg-gray-200"
         git status
 >
            ☰
          </button>


          <img
            className="h-8 mx-2 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            onClick={() => navigate("/")}
          />
        </div>

        {/* CENTER: SearchBar */}
        <div className="flex justify-center flex-grow px-4">
          <SearchBar />
        </div>

        {/* RIGHT: Profile / placeholder */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-200">🔔</button>
          <button className="p-2 rounded-full hover:bg-gray-200">➕</button>
          <div className="h-8 w-8 rounded-full bg-gray-400"></div>
        </div>

      </div>
    </header>
  );
};

export default Header;
