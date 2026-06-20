import React, { useState } from "react";

const commentsData = [
  {
    name: "Aman Sharma",
    text: "Ye video kaafi helpful thi ",
    likes: 42,
    time: "2 days ago",
    replies: [
      {
        name: "Neha",
        text: "Haan mujhe bhi bahut achhi lagi ",
        likes: 12,
        time: "1 day ago",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Verma",
    text: "Please next part jaldi lao ",
    likes: 87,
    time: "3 days ago",
    replies: [
      {
        name: "Vishakha",
        text: "Yes waiting ",
        likes: 23,
        time: "2 days ago",
        replies: [
          {
            name: "Aman",
            text: "Same here ",
            likes: 5,
            time: "1 day ago",
            replies: [],
          },
        ],
      },
    ],
  },
];

const avatarColors = [
  "from-red-400 to-pink-500",
  "from-blue-400 to-purple-500",
  "from-green-400 to-teal-500",
  "from-orange-400 to-yellow-500",
  "from-purple-400 to-indigo-500",
];

const getColor = (name) =>
  avatarColors[name.charCodeAt(0) % avatarColors.length];

const Comment = ({ data, depth = 0 }) => {
  const { name, text, replies, likes, time } = data;
  const [showReplies, setShowReplies] = useState(true);
  const [liked, setLiked] = useState(false);

  return (
    <div className={`flex gap-3 ${depth > 0 ? "mt-3" : "my-5"}`}>
      {/* Avatar */}
      <div
        className={`flex-shrink-0 rounded-full bg-gradient-to-br ${getColor(name)} flex items-center justify-center text-white font-bold shadow-sm
          ${depth === 0 ? "w-10 h-10 text-sm" : "w-7 h-7 text-xs"}`}
      >
        {name[0]}
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-400">{time || "recently"}</p>
        </div>
        <p className="text-sm text-gray-800 mt-0.5 leading-relaxed">{text}</p>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-1 text-xs font-medium transition-colors ${liked ? "text-blue-600" : "text-gray-500 hover:text-gray-800"}`}
          >
            👍 {(likes || 0) + (liked ? 1 : 0)}
          </button>
          <button className="text-xs font-medium text-gray-500 hover:text-gray-800 transition-colors">
            👎
          </button>
          <button className="text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors">
            Reply
          </button>
        </div>

        {/* Toggle + Replies */}
        {replies?.length > 0 && (
          <div className="mt-2">
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              {showReplies ? "▲" : "▼"} {replies.length} {replies.length === 1 ? "reply" : "replies"}
            </button>
            {showReplies && (
              <div className="mt-2 pl-3 border-l-2 border-gray-100">
                {replies.map((reply, index) => (
                  <Comment key={index} data={reply} depth={depth + 1} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="mt-2">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-base font-bold text-gray-900">
          {commentsData.length} Comments
        </h2>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
          ⇅ Sort by
        </button>
      </div>

      {/* Add Comment Box */}
      <div className="flex gap-3 mb-6 pb-6 border-b border-gray-100">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          G
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none text-sm py-1.5 text-gray-800 placeholder-gray-400 bg-transparent transition-colors"
          />
        </div>
      </div>

      {/* Comments List */}
      <div className="divide-y divide-gray-50">
        {commentsData.map((comment, index) => (
          <Comment key={index} data={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentContainer;