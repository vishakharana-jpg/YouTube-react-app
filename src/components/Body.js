import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';

const Body = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div className="flex mt-14 min-h-screen bg-white">
      {/* LEFT: Sidebar */}
      {isMenuOpen && (
        <aside className="w-60 flex-shrink-0 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto border-r border-gray-100">
          <Sidebar />
        </aside>
      )}

      {/* RIGHT: Main Content */}
      <div className="flex-grow min-w-0 p-4 sm:p-6">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;