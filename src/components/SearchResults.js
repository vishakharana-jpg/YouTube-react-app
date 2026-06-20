import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-14 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Header */}
        <div className="mb-5 pb-3 border-b border-gray-100">
          <p className="text-sm text-gray-500">
            Showing results for{" "}
            <span className="font-semibold text-gray-900">"{query}"</span>
          </p>
        </div>

        {/* Skeleton Loading */}
        {loading && (
          <div className="flex flex-col gap-4">
            {Array(6).fill("").map((_, i) => (
              <div key={i} className="flex gap-4 animate-pulse">
                <div className="w-64 h-36 rounded-xl bg-gray-200 flex-shrink-0" />
                <div className="flex-1 space-y-3 py-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-1/2" />
                  <div className="h-3 bg-gray-100 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        {!loading && videos.length > 0 && (
          <div className="flex flex-col gap-4">
            {videos.map((video) => (
              <SearchVideoRow key={video.id?.videoId} info={video} />
            ))}
          </div>
        )}

        {/* No results */}
        {!loading && videos.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <span className="text-5xl">🔍</span>
            <h3 className="text-lg font-semibold text-gray-700">No results found</h3>
            <p className="text-gray-400 text-sm">Try different keywords</p>
          </div>
        )}
      </div>
    </div>
  );
};

// ── Search result row ──
const SearchVideoRow = ({ info }) => {
  if (!info?.snippet) return null;

  const { title, channelTitle, thumbnails, publishedAt, description } = info.snippet;
  const videoId = info.id?.videoId;

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = { year: 31536000, month: 2592000, week: 604800, day: 86400, hour: 3600, minute: 60 };
    for (let key in intervals) {
      const value = Math.floor(seconds / intervals[key]);
      if (value >= 1) return `${value} ${key}${value > 1 ? "s" : ""} ago`;
    }
    return "Just now";
  };

  return (
    <Link to={`/watch?v=${videoId}`} className="flex gap-4 group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-64 h-36 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 flex-1 min-w-0 py-1">
        <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-xs text-gray-500">
          {publishedAt ? timeAgo(publishedAt) : ""}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-white text-xs font-bold">
            {channelTitle?.[0] || "Y"}
          </div>
          <p className="text-xs text-gray-600 font-medium">{channelTitle}</p>
        </div>
        <p className="text-xs text-gray-400 line-clamp-2 mt-1 hidden sm:block">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default SearchResults;