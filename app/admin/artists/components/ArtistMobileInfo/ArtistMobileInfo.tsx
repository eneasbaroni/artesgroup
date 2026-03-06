import ChebronDown from "@/app/icons/ChebronDown";
import { Artist } from "@/app/types/artist";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InstagramIcon from "@/app/icons/InstagramIcon";
import SpotifyIcon from "@/app/icons/SpotifyIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
import TiktokIcon from "@/app/icons/TiktokIcon";
import Link from "next/link";
import InfoIcon from "@/app/icons/InfoIcon";
import EditIcon from "@/app/icons/EditIcon";
import DeleteArtistButton from "@/app/artists/[id]/components/DeleteArtistButton";

const ArtistMobileInfo = ({ artist }: { artist: Artist }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-b border-b-white/10 p-2 flex flex-col">
      <div
        className="w-full flex flex-row gap-2 justify-between items-center"
        onClick={toggleOpen}
      >
        <h3 className="font-anton text-5xl ">{artist.name}</h3>
        <div
          className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`}
        >
          <ChebronDown />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="w-full h-auto mt-2 overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm">{artist.bio}</p>
            <div className="flex flex-row gap-2 mt-2 justify-around items-center">
              {artist.socialMedia.instagram && (
                <a href={artist.socialMedia.instagram}>
                  <InstagramIcon />
                </a>
              )}
              {artist.socialMedia.spotify && (
                <a href={artist.socialMedia.spotify}>
                  <SpotifyIcon />
                </a>
              )}
              {artist.socialMedia.youtube && (
                <a href={artist.socialMedia.youtube}>
                  <YoutubeIcon />
                </a>
              )}
              {artist.socialMedia.tiktok && (
                <a
                  href={artist.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiktokIcon />
                </a>
              )}
              <Link href={`/artists/${artist._id}`}>
                <InfoIcon />
              </Link>
              <Link href={`/admin/artists/edit/${artist._id}`}>
                <EditIcon />
              </Link>
              <DeleteArtistButton
                artistId={artist._id}
                className="border-0 bg-transparent! p-0!"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArtistMobileInfo;
