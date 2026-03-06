import { notFound } from "next/navigation";

import MainInfo from "./components/BasicInfo/MainInfo";
import ArtistFooter from "./components/ArtistFooter/ArtistHeader";
import DataInfo from "./components/DataInfo/DataInfo";
import { getArtist } from "@/app/api/services";

export default async function ArtistDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artist = await getArtist(id);

  if (!artist) {
    notFound();
  }

  return (
    <div className="min-h-screen p-10 pt-25">
      <div className="max-w-250 mx-auto flex flex-col gap-4">
        {/* Banner */}
        <div className="relative w-full aspect-11/5 rounded-2xl overflow-hidden mb-4 mobile:mb-2">
          <img
            src={artist.bannerUrl}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
          <h1 className="absolute bottom-4 left-4 text-4xl font-anton text-white">
            {artist.name}
          </h1>
        </div>

        {/* Información básica */}
        <MainInfo bio={artist.bio} videos={artist.videos} />

        {/* Público */}
        <DataInfo artist={artist} />

        {/* Metadatos */}
        <div className="mt-6 text-sm text-gray-500 text-center">
          <p>
            Creado: {new Date(artist.createdAt).toLocaleDateString("es-ES")} |
            Actualizado:{" "}
            {new Date(artist.updatedAt).toLocaleDateString("es-ES")}
          </p>
        </div>

        <ArtistFooter id={artist._id} />
      </div>
    </div>
  );
}
