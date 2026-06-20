import React from 'react';

const Button = ({ name, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 mx-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-150 active:scale-95
        ${active
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
    >
      {name}
    </button>
  );
};

export default Button;