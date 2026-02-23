import ArtistInfo from "./components/ArtistInfo/ArtistInfo";
import { ARTISTS } from "./constants";

const Artists = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <h2 className="ml-15 font-anton text-[40px]">NUESTROS ARTISTAS</h2>
      <div className="w-full h-94 flex overflow-x-auto scrollbar-custom">
        {ARTISTS.map((artist) => (
          <ArtistInfo key={artist.name} {...artist} />
        ))}
      </div>
    </div>
  );
};

export default Artists;
