import { getArtists } from "@/app/api/services/getArtists";
import ArtistInfo from "./components/ArtistInfo/ArtistInfo";
import Swipe from "./components/Swipe/Swipe";

const Artists = async () => {
  const ARTISTS = await getArtists();

  if (!ARTISTS) {
    return <> </>;
  }

  return (
    <div
      id="artists"
      className="w-full h-screen flex flex-col justify-center relative"
    >
      <h2 className="ml-15 tablet:ml-10 font-anton text-[40px] mobile:text-3xl">
        NUESTROS ARTISTAS
      </h2>
      <div className="w-full h-94 mobile:h-70 flex overflow-x-auto scrollbar-custom">
        {ARTISTS.map((artist) => (
          <ArtistInfo key={artist._id} artist={artist} />
        ))}
      </div>
      <div className="w-auto h-auto inline-block md:hidden absolute top-1/2 transform translate-y-25 left-[calc(100vw-40px)]">
        <Swipe />
      </div>
    </div>
  );
};

export default Artists;
