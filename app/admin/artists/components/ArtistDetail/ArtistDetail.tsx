"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Artist } from "@/app/types/artist";
import Link from "next/link";
import InstagramIcon from "@/app/icons/InstagramIcon";
import SpotifyIcon from "@/app/icons/SpotifyIcon";
import TiktokIcon from "@/app/icons/TiktokIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
import InfoIcon from "@/app/icons/InfoIcon";
import EditIcon from "@/app/icons/EditIcon";
import DeleteArtistButton from "@/app/artists/[id]/components/DeleteArtistButton/DeleteArtistButton";

const ArtistDetail = ({
  selectedArtist,
}: {
  selectedArtist: Artist | null;
}) => {
  return (
    <div className="w-1/4 border-r border-r-white/10 flex flex-col justify-between mobile:hidden">
      <h2 className="ml-5 font-anton text-[40px] tablet:text-3xl">
        ARTISTAS CARGADOS
      </h2>
      {selectedArtist && (
        <div className="flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.img
              src={selectedArtist.imgUrl}
              alt={selectedArtist.name}
              className="w-full aspect-square object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={selectedArtist._id}
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <div className="overflow-hidden border-y border-y-white/10">
              <motion.h4
                className="p-3 pl-5 font-anton text-xl mobile:text-lg "
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1 }}
                key={selectedArtist._id}
              >
                {selectedArtist.name}
              </motion.h4>
            </div>
          </AnimatePresence>
          <div className="w-full border-b border-b-white/10 h-[50px] flex justify-around items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                className="w-full px-5 flex justify-between items-center"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
                key={selectedArtist._id}
              >
                <Link href={`/artists/${selectedArtist._id}`}>
                  <InfoIcon />
                </Link>
                <Link href={`/admin/artists/edit/${selectedArtist._id}`}>
                  <EditIcon />
                </Link>
                <DeleteArtistButton
                  artistId={selectedArtist._id}
                  className="border-0 bg-transparent! p-0!"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full h-[50px] flex justify-around items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                className="w-full px-5 flex justify-between items-center"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
                key={selectedArtist._id}
              >
                {selectedArtist.socialMedia.instagram && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedArtist.socialMedia.instagram}
                  >
                    <InstagramIcon />
                  </a>
                )}
                {selectedArtist.socialMedia.spotify && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedArtist.socialMedia.spotify}
                  >
                    <SpotifyIcon />
                  </a>
                )}
                {selectedArtist.socialMedia.youtube && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedArtist.socialMedia.youtube}
                  >
                    <YoutubeIcon />
                  </a>
                )}
                {selectedArtist.socialMedia.tiktok && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedArtist.socialMedia.tiktok}
                  >
                    <TiktokIcon />
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistDetail;
