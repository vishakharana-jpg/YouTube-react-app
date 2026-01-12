import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';

const Body = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div className="flex mt-12">
      {/* LEFT: Sidebar only if open */}
      {isMenuOpen && <Sidebar />}

      {/* RIGHT: Main Content */}
      <div className="flex-grow p-4">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
