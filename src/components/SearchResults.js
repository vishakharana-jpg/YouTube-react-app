import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!query) return;
    fetchSearchVideos();
  }, [query]);

  const fetchSearchVideos = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=${query}&key=AIzaSyAntkM6fsWy1DOrz0CnXvxKpK1kyrQFbA8`
      );

      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.log("Search results error", error);
    }
  };

  return (
    <div className="p-4 mt-14 flex flex-wrap gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} info={video} />
      ))}
    </div>
  );
};

export default SearchResults;
