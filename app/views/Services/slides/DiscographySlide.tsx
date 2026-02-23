const DiscographySlide = () => {
  return (
    <div
      id="discography"
      className="w-full h-screen relative flex items-center justify-center flex-col"
    >
      <img
        src="/images/Discography.png"
        alt="discography"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="max-w-170 z-1 text-center darker-glass p-10 rounded-4xl border border-white/10">
        <h3 className="font-anton text-[40px]">DISCOGRÁFICA</h3>
        <p>
          Nos ocupamos de todo el recorrido de la música: producción,
          distribución y lanzamiento para que la escuche el mundo entero.
          Gestionamos la grabación, distribución y promoción de cada proyecto
          para llegar a nuevas audiencias y plataformas de manera estratégica.
          Impulsamos la música de nuestros artistas desde la creación hasta el
          lanzamiento con estrategia, planificación y creatividad.
        </p>
      </div>
    </div>
  );
};
export default DiscographySlide;
