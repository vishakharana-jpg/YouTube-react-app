import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div className="min-h-screen bg-white mt-14">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Left: Video + Info + Comments ── */}
          <div className="flex-1 min-w-0">

            {/* Video Player */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-lg" style={{ aspectRatio: "16/9" }}>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video Title */}
            <div className="mt-4">
              <h1 className="text-lg font-bold text-gray-900 leading-snug">
                YouTube Video Playing
              </h1>

              {/* Action Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-white text-sm font-bold">
                    Y
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">YouTube Channel</p>
                    <p className="text-xs text-gray-500">1.2M subscribers</p>
                  </div>
                  <button className="ml-3 px-4 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 active:scale-95 transition-all duration-150">
                    Subscribe
                  </button>
                </div>

                {/* Like / Share / Save */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                    <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors border-r border-gray-300">
                      👍 <span>Like</span>
                    </button>
                    <button className="px-3 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors">
                      👎
                    </button>
                  </div>
                  <button className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                    ↗ Share
                  </button>
                  <button className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                    ＋ Save
                  </button>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="mt-6">
              <CommentContainer />
            </div>
          </div>

          {/* ── Right: Suggested Videos ── */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Up Next</h2>
            <div className="flex flex-col gap-3">
              {Array(8).fill("").map((_, i) => (
                <div key={i} className="flex gap-2 cursor-pointer group">
                  {/* Thumbnail */}
                  <div className="w-40 h-24 rounded-lg bg-gray-200 animate-pulse flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-gray-300 group-hover:to-gray-400 transition-colors" />
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0 space-y-1.5 py-0.5">
                    <div className="h-3.5 bg-gray-200 rounded animate-pulse w-full" />
                    <div className="h-3 bg-gray-100 rounded animate-pulse w-3/4" />
                    <div className="h-3 bg-gray-100 rounded animate-pulse w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WatchPage;