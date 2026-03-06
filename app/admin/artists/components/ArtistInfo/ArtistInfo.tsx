import { Artist } from "@/app/types/artist";
import Link from "next/link";

type ArtistInfoProps = {
  artist: Artist;
  handleSelectArtist: (artist: Artist) => void;
};

const ArtistInfo = ({ artist, handleSelectArtist }: ArtistInfoProps) => {
  return (
    <Link
      href={`/artists/${artist._id}`}
      className="w-full flex border-b border-b-white/10 h-auto p-4 hover:bg-ag-magent cursor-pointer transition-colors duration-300 group"
      onMouseEnter={() => handleSelectArtist(artist)}
    >
      <h3 className="font-anton text-5xl group-hover:pl-10 transition-all duration-300">
        {artist.name}
      </h3>
    </Link>
  );
};

export default ArtistInfo;
