import React from "react";
import { Link } from "react-router-dom";

const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };
  for (let key in intervals) {
    const value = Math.floor(seconds / intervals[key]);
    if (value >= 1) return `${value} ${key}${value > 1 ? "s" : ""} ago`;
  }
  return "Just now";
};

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) return null;

  const snippet = info.snippet;
  const videoId = info.id?.videoId || info.id;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const viewCount = info.statistics?.viewCount;

  return (
    <Link to={"/watch?v=" + videoId} className="block group">
      <div className="flex flex-col gap-2 cursor-pointer">

        {/* Thumbnail */}
        <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-100">
          <img
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt={title}
            src={thumbnails?.medium?.url || "https://via.placeholder.com/360x200"}
          />
          {/* Duration badge */}
          {snippet?.duration && (
            <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
              {snippet.duration}
            </span>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />
        </div>

        {/* Info */}
        <div className="flex gap-3 px-1">
          {/* Channel Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
            {channelTitle?.[0] || "Y"}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm line-clamp-2 text-gray-900 leading-snug group-hover:text-gray-700 transition-colors">
              {title || "No title"}
            </h3>
            <p className="text-gray-500 text-xs mt-1 hover:text-gray-800 transition-colors cursor-pointer">
              {channelTitle || "Unknown channel"}
            </p>
            <p className="text-gray-500 text-xs mt-0.5">
              {viewCount ? `${Number(viewCount).toLocaleString()} views • ` : ""}
              {publishedAt ? timeAgo(publishedAt) : ""}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;