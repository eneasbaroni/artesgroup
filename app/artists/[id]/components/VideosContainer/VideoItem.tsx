import { formatViews } from "./helpers";
import type { VideoData } from "./types";

interface VideoItemProps {
  video: VideoData;
}

const VideoItem = ({ video }: VideoItemProps) => {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-b border-white/10 flex flex-col overflow-hidden transition-all duration-300"
    >
      {/* Info */}
      <div className="p-4 mobile:p-0">
        <h3 className="font-anton text-ag-magent text-2xl mobile:text-xl">
          {formatViews(video.viewCount)}
        </h3>
        <h3 className="font-semibold line-clamp-2 mb-2 group-hover:text-ag-magent transition-colors mobile:text-sm mobile:font-normal">
          {video.title}
        </h3>
      </div>

      {/* Thumbnail */}
      <div className="h-0 group-hover:h-62 overflow-hidden transition-all duration-300">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </a>
  );
};

export default VideoItem;
