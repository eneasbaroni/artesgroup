import Divider from "@/app/components/Divider/Divider";
import VideosContainer from "../VideosContainer";
import { Artist } from "@/app/types/artist";

type MainInfoProps = {
  bio: Artist["bio"];
  videos: Artist["videos"];
};

const MainInfo = ({ bio, videos }: MainInfoProps) => {
  return (
    <div className="white-glass border border-white/10 rounded-2xl p-8 mobile:p-5 flex flex-row flex-wrap gap-4">
      <div className="w-[calc(50%-1rem)] mobile:w-full flex flex-col gap-4">
        <h3 className="font-anton text-4xl mobile:text-3xl mb-4">Bio</h3>
        <p className="text-gray-300 mobile:text-sm leading-relaxed whitespace-pre-wrap">
          {bio.replace(/\\n/g, "\n")}
        </p>
      </div>

      {videos.length > 0 && (
        <>
          <div className="w-full md:hidden">
            <Divider />
          </div>
          <div className="w-[calc(50%-1rem)] mobile:w-full flex flex-col gap-4">
            <h3 className="font-anton text-4xl mobile:text-3xl mb-4">Videos</h3>
            <VideosContainer videos={videos} />
          </div>
        </>
      )}
    </div>
  );
};

export default MainInfo;
