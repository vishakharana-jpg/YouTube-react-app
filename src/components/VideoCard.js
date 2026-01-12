
import React from "react";
import { Link } from "react-router-dom";

// 🔹 helper function → kitna purana video hai
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
  if (!info) return null;
  if (!info.snippet) return null;

  const snippet = info.snippet;
  const videoId = info.id?.videoId || info.id;

  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const viewCount = info.statistics?.viewCount;

  return (
    <Link to={"/watch?v=" + videoId}>
      <div className="w-72 cursor-pointer flex flex-col gap-2 hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
        {/* Thumbnail */}
        <div className="relative">
          <img
            className="w-full h-44 object-cover"
            alt={title}
            src={thumbnails?.medium?.url || "https://via.placeholder.com/360x200"}
          />
          {/* Optional duration badge */}
          {snippet?.duration && (
            <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
              {snippet.duration}
            </span>
          )}
        </div>

        {/* Text Section */}
        <div className="flex flex-col px-1">
          {/* Title */}
          <h3 className="font-semibold text-sm line-clamp-2 text-gray-900">
            {title || "No title"}
          </h3>

          {/* Channel */}
          <p className="text-gray-600 text-xs mt-1">{channelTitle || "Unknown channel"}</p>

          {/* Views + Time */}
          <p className="text-gray-500 text-xs mt-1">
            {viewCount ? `${Number(viewCount).toLocaleString()} views • ` : ""}
            {publishedAt ? timeAgo(publishedAt) : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
