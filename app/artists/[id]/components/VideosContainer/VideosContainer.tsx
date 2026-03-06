"use client";

import { useYouTubeVideos } from "./useYouTubeVideos";
import VideoItem from "./VideoItem";

const VideosContainer = ({ videos }: { videos: string[] }) => {
  const { videosData, loading, error } = useYouTubeVideos(videos);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-10">
        <div className="w-8 h-8 border-4 border-pink-300 border-t-ag-magent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-xl">
        <p className="text-red-400">⚠️ {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col border-t border-white/10">
      {videosData.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideosContainer;
