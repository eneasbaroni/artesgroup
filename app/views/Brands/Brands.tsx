import { BRANDS } from "./constants";
const Brands = () => {
  return (
    <div className="mt-6 w-full flex flex-row justify-between">
      {BRANDS.map((brand) => (
        <div key={brand.name} className="w-1/14">
          <img
            src={brand.imageUrl}
            alt={brand.name}
            className="w-full h-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
};
export default Brands;
