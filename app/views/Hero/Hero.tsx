const Hero = () => {
    return (
        <div className="w-full h-screen relative flex items-center justify-center">
            <img
                src="/images/hero-img.png"
                alt="hero"
                className="absolute w-full h-full object-cover -z-10"
            />
            <div>
                <h1 className="mt-10 p-10 font-anton text-7xl leading-24 text-center dark-glass rounded-4xl border border-white/10">
                    TU ESCENARIO
                    <br /> NUESTRA MISIÓN
                </h1>
            </div>
        </div>
    );
};
export default Hero;
