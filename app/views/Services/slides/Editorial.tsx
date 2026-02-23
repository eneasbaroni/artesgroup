const EditorialSlide = () => {
  return (
    <div
      id="editorial"
      className="w-full h-screen relative flex items-center justify-center flex-col"
    >
      <img
        src="/images/Editorial.png"
        alt="editorial"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="max-w-170 z-1 text-center darker-glass p-10 rounded-4xl border border-white/10">
        <h3 className="font-anton text-[40px]">EDITORIAL</h3>
        <p>
          Gestionamos los derechos de autor y protegemos el talento de los
          artistas que confían en nuestra experiencia. Administramos tu catálogo
          musical con claridad y estrategia, garantizando que tus canciones
          estén seguras y activas en todos los frentes. Mientras vos creás,
          nosotros nos encargamos de tus derechos de autor y del cuidado de cada
          canción.
        </p>
      </div>
    </div>
  );
};
export default EditorialSlide;
