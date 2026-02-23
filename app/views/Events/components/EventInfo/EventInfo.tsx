import TicketIcon from "@/app/icons/TicketIcon";
import { EventInfoProps } from "./types";

const EventInfo = ({
  name,
  date,
  hour,
  location,
  imageUrl,
  description,
}: EventInfoProps) => {
  // Formatear la fecha al formato '17 Dic, 2026' (evitar desfase de zona horaria)
  let formattedDate = date;
  try {
    // Forzar la fecha a medianoche local para evitar desfase
    const d = new Date(date + "T00:00:00");
    const day = d.toLocaleString("es-AR", { day: "2-digit" });
    const month = d
      .toLocaleString("es-AR", { month: "short" })
      .replace(".", "");
    const year = d.getFullYear();
    formattedDate = `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}, ${year}`;
  } catch {}

  return (
    <div className="w-full pl-15 h-auto border-b flex flex-row items-start group overflow-hidden cursor-pointer">
      <h3 className="font-anton text-xl w-30 min-w-30">{formattedDate}</h3>
      <div className="flex flex-row w-50 min-w-50 justify-center items-center">
        <h4 className="ml-4">Domingo</h4>
        <div className="w-10 h-px m-2 bg-white"></div>
        <h4>{hour}hs</h4>
      </div>
      <div className="relative w-52 min-w-52 flex justify-center items-start">
        <img
          className="w-full h-0 opacity-0 group-hover:h-52 group-hover:opacity-100 transition-all duration-300"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="flex flex-col relative px-20 w-full justify-center">
        <h3 className="font-anton text-xl">{name}</h3>
        <p className="hidden h-0 group-hover:block  mt-8 rounded-lg transition-all duration-300 overflow-hidden group-hover:overflow-visible">
          {description}
          <br />
          <span className="flex flex-row items-center font-anton">
            Comprar <TicketIcon />
          </span>
        </p>

        <div className="-z-1 absolute top-0 left-0 w-full min-w-full h-52 min-h-52 translate-y-52 group-hover:translate-y-0 transition-all duration-500 bg-ag-magent"></div>
      </div>
    </div>
  );
};

export default EventInfo;
