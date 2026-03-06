import Link from "next/link";
import LogoutForm from "./components/LogoutForm/LogoutForm";

const Admin = () => {
  return (
    <div className="w-full min-h-dvh flex flex-col p-15 tablet:p-10 tablet:pt-30 items-center justify-center gap-5">
      <div className="w-full flex flex-row tablet:flex-col items-center justify-center gap-5">
        <div className="p-10 mobile:p-5 darker-glass border border-dashed rounded-3xl border-white/10 flex flex-col gap-4 justify-center items-center">
          <h3 className="font-anton text-[40px]  mobile:text-3xl">ARTISTAS</h3>
          <p className="text-center mobile:text-sm">
            Aquí podrás gestionar los artistas de tu plataforma. Agrega nuevos
            artistas, edita su información o elimínalos según sea necesario.
            Mantén tu catálogo de artistas actualizado para ofrecer la mejor
            experiencia a tus usuarios.
          </p>
          <div className="flex mobile:flex-col gap-4">
            <Link
              href="/admin/artists/new"
              className="py-2 px-4 text-center rounded-3xl border border-ag-magent bg-ag-magent/10 hover:bg-ag-magent/20 transition-colors duration-300 cursor-pointer"
            >
              Agregar Artista
            </Link>
            <Link
              href="/admin/artists"
              className="py-2 px-4 text-center rounded-3xl border border-ag-magent bg-ag-magent/10 hover:bg-ag-magent/20 transition-colors duration-300 cursor-pointer"
            >
              Ir a listado de artistas
            </Link>
          </div>
        </div>
        <div className="p-10 mobile:p-5 darker-glass border border-dashed rounded-3xl border-white/10 flex flex-col gap-4 justify-center items-center">
          <h3 className="font-anton text-[40px]  mobile:text-3xl">EVENTOS</h3>
          <p className="text-center mobile:text-sm">
            Aquí podrás gestionar los eventos de tu plataforma. Agrega nuevos
            eventos, edita su información o elimínalos según sea necesario.
            Mantén tu catálogo de eventos actualizado para ofrecer la mejor
            experiencia a tus usuarios.
          </p>
          <div className="flex mobile:flex-col gap-4">
            <Link
              href="/admin/events/new"
              className="py-2 px-4 text-center rounded-3xl border border-ag-magent bg-ag-magent/10 hover:bg-ag-magent/20 transition-colors duration-300 cursor-pointer"
            >
              Agregar Evento
            </Link>
            <Link
              href="/admin/events"
              className="py-2 px-4 text-center rounded-3xl border border-ag-magent bg-ag-magent/10 hover:bg-ag-magent/20 transition-colors duration-300 cursor-pointer"
            >
              Ir a listado de eventos
            </Link>
          </div>
        </div>
      </div>
      <LogoutForm />
    </div>
  );
};

export default Admin;
