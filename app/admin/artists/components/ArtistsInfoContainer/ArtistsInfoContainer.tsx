"use client";

import ArtistInfo from "../ArtistInfo/ArtistInfo";
import { Artist } from "@/app/types/artist";
import { useState } from "react";

import ArtistDetail from "../ArtistDetail/ArtistDetail";
import ArtistMobileInfo from "../ArtistMobileInfo/ArtistMobileInfo";

const ArtistsInfoContainer = ({ ARTISTS }: { ARTISTS: Artist[] }) => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleSelectArtist = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  return (
    <div className="w-full h-[calc(100dvh-115px)] mobile:h-auto border border-white/10 flex flex-row">
      <ArtistDetail selectedArtist={selectedArtist} />
      <div className="w-3/4 mobile:hidden overflow-hidden hover:overflow-y-auto scrollbar-custom">
        {ARTISTS.map((artist) => (
          <ArtistInfo
            key={artist.name}
            artist={artist}
            handleSelectArtist={handleSelectArtist}
          />
        ))}
      </div>
      <div className="md:hidden w-full">
        {ARTISTS.map((artist) => (
          <ArtistMobileInfo key={artist.name} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistsInfoContainer;
