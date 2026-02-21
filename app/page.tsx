import Brands from "./views/Brands/Brands";
import Hero from "./views/Hero/Hero";
import Hook from "./views/Hook/Hook";
import Services from "./views/Services/Services";

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <Brands />
            <Hook />
            <Services />
        </div>
    );
};
export default Home;
