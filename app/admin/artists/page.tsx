import { notFound } from "next/navigation";
import ArtistsInfoContainer from "./components/ArtistsInfoContainer/ArtistsInfoContainer";
import { getArtists } from "@/app/api/services/getArtists";
import Link from "next/link";

const Artists = async () => {
  const ARTISTS = await getArtists();

  if (!ARTISTS) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center pt-25">
      <ArtistsInfoContainer ARTISTS={ARTISTS} />
      <div className="mt-4 w-full flex flex-row mobile:flex-col gap-4 justify-center items-center ">
        <Link
          href="/admin/artists/new"
          className="w-auto m-auto  py-2 px-4 rounded-full border border-white/10 hover:bg-white/10 transition cursor-pointer text-center"
        >
          Agregar nuevo artista
        </Link>
        <Link
          href="/admin"
          className="w-auto m-auto  py-2 px-4 rounded-full border border-white/10 hover:bg-white/10 transition cursor-pointer text-center"
        >
          Volver al panel
        </Link>
      </div>
    </div>
  );
};

export default Artists;
