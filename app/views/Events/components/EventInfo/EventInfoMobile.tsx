"use client";
import TicketIcon from "@/app/icons/TicketIcon";
import { EventInfoProps } from "./types";
import { motion } from "framer-motion";

const EventInfoMobile = ({
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
    <motion.div
      className="w-full h-auto border-b flex flex-col py-5 px-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
      }}
    >
      <div className="w-full flex flex-row justify-between items-center text-sm">
        <h4 className="w-30 min-w-30">{formattedDate}</h4>
        <div className="flex flex-row justify-between items-center">
          <h4 className="ml-4">Domingo</h4>
          <div className="w-10 h-px m-2 bg-white"></div>
          <h4>{hour}hs</h4>
        </div>
      </div>
      <h3 className="font-anton text-3xl mt-5">{name}</h3>
      <p className="mt-8 text-sm">
        {description}
        <br />
        <span className="flex flex-row items-center font-anton mt-5">
          Comprar <TicketIcon />
        </span>
      </p>
    </motion.div>
  );
};

export default EventInfoMobile;
