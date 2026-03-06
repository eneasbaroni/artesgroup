import Events from "../views/Events/Events";
import AboutText from "./components/AboutText/AboutText";
import Productions from "./components/Productions/Productions";

const About = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[url('/images/show.jpeg')] bg-cover bg-center">
        <div className="w-full p-10 mobile:mt-20">
          <div className="max-w-200 m-auto mobile:w-auto mobile:max-w-130 p-10 mobile:p-4 darker-glass rounded-4xl border border-white/10">
            <h1 className="font-anton text-7xl tablet:text-6xl mobile:text-4xl leading-24 tablet:leading-20 mobile:leading-14 text-center">
              NOSOTROS
            </h1>
            <p className="mobile:text-sm">
              Artes Group es una empresa argentina líder en la realización y
              organización de espectáculos y eventos especiales, tanto en la
              República Argentina como en el resto de América. Dirigida por
              Alberto Miguel, con 30 años de trayectoria en el campo de la
              cultura en sus diferentes expresiones, realizando innumerables
              producciones privadas y para organismos públicos. Experiencia y
              crecimiento son lo que permiten a Artes Group posicionarse como un
              referente indiscutido en el mercado en cuanto a la producción
              integral de conciertos, eventos y management de artistas. La
              empresa con base en Buenos Aires, Argentina, se destaca por
              implementar tecnologías de última generación y conceptos aplicados
              a la realización y organización de eventos.
            </p>
          </div>
        </div>
      </div>
      <Productions />
      <AboutText />
      <Events />
    </div>
  );
};
export default About;
