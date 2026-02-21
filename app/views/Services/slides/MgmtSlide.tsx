const ManagementSlide = () => {
    return (
        <div className="w-full h-screen relative flex items-center justify-center flex-col">
            <img
                src="/images/Mgmt.png"
                alt="management"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />
            <div className="max-w-170 z-1 text-center darker-glass p-10 rounded-4xl border border-white/10">
                <h3 className="font-anton text-[40px]">MANAGEMENT</h3>
                <p>
                    Trabajamos en conjunto con nuestros artistas para potenciar
                    sus carreras y desarrollar nuevas oportunidades de
                    crecimiento. Trabajamos estrategias que fortalezcan su
                    desarrollo a largo plazo. Buscamos optimizar la monetización
                    de su contenido. Sumamos creatividad, orden y planificación
                    para que los artistas puedan enfocarse en lo que mejor
                    hacen: su arte.
                </p>
            </div>
        </div>
    );
};
export default ManagementSlide;
