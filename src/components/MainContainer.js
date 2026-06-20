import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Category Filter Buttons */}
      <div className="sticky top-14 bg-white z-40 pt-2 pb-1 border-b border-gray-100">
        <ButtonList />
      </div>

      {/* Video Grid */}
      <VideoContainer />
    </div>
  );
};

export default MainContainer;