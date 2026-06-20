import React, { useState, useRef } from "react";
import Button from "./Button";

const categories = [
  "All", "Gaming", "Music", "Cooking", "News",
  "Soccer", "Cricket", "Shopping", "Live", "Short video",
  "Technology", "Comedy", "Education", "Travel", "Fitness",
];

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center px-4">
      {/* Left Arrow */}
      <button
        onClick={() => scroll(-1)}
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 shadow-sm border border-gray-200 text-gray-600 mr-2 transition-all duration-150"
      >
        ‹
      </button>

      {/* Scrollable Buttons */}
      <div
        ref={scrollRef}
        className="flex gap-1 overflow-x-auto scrollbar-hide scroll-smooth py-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            name={cat}
            active={active === cat}
            onClick={() => setActive(cat)}
          />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll(1)}
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 shadow-sm border border-gray-200 text-gray-600 ml-2 transition-all duration-150"
      >
        ›
      </button>
    </div>
  );
};

export default ButtonList;