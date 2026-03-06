import InstagramIcon from "@/app/icons/InstagramIcon";
import SpotifyIcon from "@/app/icons/SpotifyIcon";
import TiktokIcon from "@/app/icons/TiktokIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
import { Artist } from "@/app/types/artist";

const MediaItem = ({ link, Icon }: { link: string; Icon: React.FC }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 h-10 w-[calc(25%-1rem)] mobile:w-[calc(50%-1rem)] flex items-center justify-center border border-white/10 rounded-full hover:bg-white/5 transition text-center"
    >
      <Icon />
    </a>
  );
};

const Medias = ({ socialMedia }: { socialMedia: Artist["socialMedia"] }) => {
  return (
    <>
      {(socialMedia.spotify ||
        socialMedia.instagram ||
        socialMedia.youtube ||
        socialMedia.tiktok) && (
        <>
          <h2 className="font-anton text-2xl mb-6">Redes</h2>
          <div className="flex flex-row flex-wrap gap-4">
            {socialMedia.spotify && (
              <MediaItem link={socialMedia.spotify} Icon={SpotifyIcon} />
            )}
            {socialMedia.instagram && (
              <MediaItem link={socialMedia.instagram} Icon={InstagramIcon} />
            )}
            {socialMedia.youtube && (
              <MediaItem link={socialMedia.youtube} Icon={YoutubeIcon} />
            )}
            {socialMedia.tiktok && (
              <MediaItem link={socialMedia.tiktok} Icon={TiktokIcon} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Medias;
