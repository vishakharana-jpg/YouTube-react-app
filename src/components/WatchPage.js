import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <>
    <div className="flex w-full p-4">
      {/* Left Section - Video */}
      <div className="w-8/12">
        <iframe
          className="w-full h-[500px] rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        {/* Video Title (optional static for now) */}
        <h1 className="mt-4 text-xl font-bold">
          YouTube Video Playing
        </h1>
      </div>

      {/* Right Section - Suggestions */}
      <div className="w-4/12 pl-4">
        <h2 className="text-lg font-semibold mb-2">Suggested Videos</h2>

        {/* Dummy Suggestions */}
        <div className="space-y-3">
          <div className="p-2 bg-gray-100 rounded">Video Suggestion 1</div>
          <div className="p-2 bg-gray-100 rounded">Video Suggestion 2</div>
          <div className="p-2 bg-gray-100 rounded">Video Suggestion 3</div>
        </div>
      </div>
    </div>
    <CommentContainer/>
    </>
  );
};

export default WatchPage;
