import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (videos.length === 0)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 p-4">
        {Array(12).fill("").map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="aspect-video rounded-xl bg-gray-200 animate-pulse" />
            <div className="flex gap-3 px-1">
              <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
              <div className="flex-1 space-y-2 mt-1">
                <div className="h-3.5 bg-gray-200 rounded animate-pulse w-full" />
                <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3" />
                <div className="h-3 bg-gray-100 rounded animate-pulse w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;