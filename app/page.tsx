import Artists from "./views/Artists/Artists";
import Brands from "./views/Brands/Brands";
import Events from "./views/Events/Events";
import Hero from "./views/Hero/Hero";
import Hook from "./views/Hook/Hook";
import ServicesB from "./views/Services copy/Services";
// import Services from "./views/Services/Services";

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <Brands />
            <Hook />
            <ServicesB />
            <Artists />
            <Events />
        </div>
    );
};
export default Home;
