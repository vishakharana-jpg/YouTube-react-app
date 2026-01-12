import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <aside className="w-56  p-4 shadow-md">
      
      {/* MAIN */}
      <ul className="space-y-3 text-sm">
        <li className="font-medium">Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <hr className="my-4" />

      {/* SUBSCRIPTIONS */}
      <h1 className="text-sm font-semibold mb-2">Subscriptions</h1>
      <ul className="space-y-3 text-sm">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <hr className="my-4" />

      {/* WATCH LATER */}
      <h1 className="text-sm font-semibold mb-2">Watch Later</h1>
      <ul className="space-y-3 text-sm">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

    </aside>
  );
};

export default Sidebar;
