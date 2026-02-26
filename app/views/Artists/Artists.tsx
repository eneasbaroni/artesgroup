import ArtistInfo from "./components/ArtistInfo/ArtistInfo";
import Swipe from "./components/Swipe/Swipe";
import { ARTISTS } from "./constants";

const Artists = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <h2 className="ml-15 tablet:ml-10 font-anton text-[40px] mobile:text-3xl">
        NUESTROS ARTISTAS
      </h2>
      <div className="w-full h-94 mobile:h-70 flex overflow-x-auto scrollbar-custom relative">
        {ARTISTS.map((artist) => (
          <ArtistInfo key={artist.name} {...artist} />
        ))}
        <div className="w-auto h-auto inline-block md:hidden absolute bottom-4 left-[calc(100vw-40px)]">
          <Swipe />
        </div>
      </div>
    </div>
  );
};

export default Artists;
