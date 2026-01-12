const GOOGLE_API_KEY = "AIzaSyAntkM6fsWy1DOrz0CnXvxKpK1kyrQFbA8";

export const YOUTUBE_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=10&key=AIzaSyAntkM6fsWy1DOrz0CnXvxKpK1kyrQFbA8";

export const YOUTUBE_SEARCH_API =
  "https://api.allorigins.win/raw?url=" +
  encodeURIComponent(
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  );
