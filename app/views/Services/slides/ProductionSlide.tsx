const ProductionSlide = () => {
  return (
    <div
      id="production"
      className="w-full h-screen relative flex items-center justify-center flex-col"
    >
      <img
        src="/images/Production.png"
        alt="production"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="max-w-170 z-1 text-center darker-glass p-10 rounded-4xl border border-white/10">
        <h3 className="font-anton text-[40px]">PRODUCCIÓN</h3>
        <p>
          Con más de 40 años de experiencia, hacemos realidad conciertos en
          vivo, giras nacionales e internacionales y eventos de entretenimiento
          inmersivo. Planificamos y ejecutamos producciones completas, cuidando
          cada detalle para que cada show llegue a su máximo potencial.
          Gestionamos todo lo que necesita un show para salir bien:
          organización, logística y cada detalle que hace que el evento
          funcione.
        </p>
      </div>
    </div>
  );
};
export default ProductionSlide;
