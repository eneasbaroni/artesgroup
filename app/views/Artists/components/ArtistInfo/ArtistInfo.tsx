import SpotifyIcon from "@/app/icons/SpotifyIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import Link from "next/link";
import InfoIcon from "@/app/icons/InfoIcon";
import { Artist } from "@/app/types/artist";

const ArtistInfo = ({ artist }: { artist: Artist }) => {
  return (
    <div className="w-75 h-75 mobile:w-50 mobile:h-50 shrink-0 relative flex items-end group overflow-hidden">
      <img
        src={artist.imgUrl}
        alt={artist.name}
        className="w-full h-full object-cover absolute top-0 left-0 z-10 grayscale hover:grayscale-0 transition duration-300"
      />
      <h3 className="w-full z-20 pl-4 text-white text-lg mobile:text-sm font-light">
        {artist.name}
      </h3>
      <div className="w-30 mobile:w-26 mobile:[&>a>svg]:w-6 mobile:[&>a>svg]:h-6 h-10 mobile:h-8 z-20 rounded-t-xl bg-ag-magent relative flex flex-row items-center justify-center opacity-0 tablet:opacity-100 translate-y-8 tablet:translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        {artist.socialMedia.spotify && (
          <a
            href={artist.socialMedia.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpotifyIcon />
          </a>
        )}
        {artist.socialMedia.instagram && (
          <a
            href={artist.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        )}
        <Link href={`/artists/${artist._id}`}>
          <InfoIcon />
        </Link>
      </div>
    </div>
  );
};

export default ArtistInfo;
