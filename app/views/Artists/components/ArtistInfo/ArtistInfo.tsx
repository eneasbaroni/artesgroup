import SpotifyIcon from "@/app/icons/SpotifyIcon";
import { ArtistInfoProps } from "./types";
import InstagramIcon from "@/app/icons/InstagramIcon";
import Link from "next/link";
import InfoIcon from "@/app/icons/InfoIcon";

const ArtistInfo = ({
  name,
  imageUrl,
  spotifyUrl,
  instagramUrl,
}: ArtistInfoProps) => {
  return (
    <div className="w-75 h-75 shrink-0 relative flex items-end group overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover absolute top-0 left-0 z-10 grayscale hover:grayscale-0 transition duration-300"
      />
      <h3 className="w-full z-20 pl-4 text-white text-lg font-light">{name}</h3>
      <div className="w-30 h-10 z-20 rounded-t-xl bg-ag-magent relative flex flex-row items-center justify-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
          <SpotifyIcon />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <Link href="" target="_blank" rel="noopener noreferrer">
          <InfoIcon />
        </Link>
      </div>
    </div>
  );
};

export default ArtistInfo;
