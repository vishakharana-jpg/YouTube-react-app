import React from "react";

const commentsData = [
  {
    name: "Aman Sharma",
    text: "Ye video kaafi helpful thi ",
    replies: [
      {
        name: "Neha",
        text: "Haan mujhe bhi bahut achhi lagi ",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Verma",
    text: "Please next part jaldi lao ",
    replies: [
      {
        name: "Vishakha",
        text: "Yes waiting ",
        replies: [
          {
            name: "Aman",
            text: "Same here ",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex gap-3 my-4">
      {/* Profile icon */}
      <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
        {name[0]}
      </div>

      {/* Comment body */}
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-gray-800 text-sm">{text}</p>

        {/* Replies */}
        <div className="ml-5 border-l border-gray-300 pl-4">
          {replies.map((reply, index) => (
            <Comment key={index} data={reply} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-4">
        {commentsData.length} Comments
      </h2>

      {commentsData.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};

export default CommentContainer;
