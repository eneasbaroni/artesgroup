import { Artist } from "@/app/types/artist";
import AudienceStatistics from "../AudienceStatistics/AudienceStatistics";
import Divider from "@/app/components/Divider/Divider";
import Medias from "../Medias/Medias";

const DataInfo = ({ artist }: { artist: Artist }) => {
  return (
    <div className="white-glass border border-white/10 rounded-2xl p-8 mobile:p-5 flex flex-wrap">
      <div className="w-[calc(60%-1rem)] mobile:w-full">
        <AudienceStatistics age={artist.public.age} sex={artist.public.sex} />
      </div>
      <div className="w-full md:hidden mb-4">
        <Divider />
      </div>
      <div className="w-[calc(40%-1rem)] mobile:w-full">
        <Medias socialMedia={artist.socialMedia} />
      </div>
    </div>
  );
};

export default DataInfo;
