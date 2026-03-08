"use client";

import { Event } from "@/app/types/event";
import { getDayOfWeek, formatShortDate, formatTime } from "@/app/helpers";
import ChebronDown from "@/app/icons/ChebronDown";
import FolderIcon from "@/app/icons/FolderIcon";
import TicketIcon from "@/app/icons/TicketIcon";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import CheckIcon from "@/app/icons/CheckIcon";
import XIcon from "@/app/icons/XIcon";
import Link from "next/link";
import EditIcon from "@/app/icons/EditIcon";
import DeleteEventButton from "../DeleteEventButton/DeleteEventButton";

const EventItem = ({ event }: { event: Event }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  const containerVariants: Variants = {
    initial: {
      height: "30px",
    },
    hover: {
      height: "auto",
      transition: { duration: 0.3 },
    },
  };

  const imgVariants: Variants = {
    initial: {
      height: "0px",
      opacity: 0,
    },
    hover: {
      height: "100%",
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="w-full cursor-pointer border-b border-b-white/10 flex flex-col overflow-hidden"
      onClick={toggleDisplay}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
    >
      <div className="w-full px-5 flex mobile:flex-col gap-2 items-center">
        <div className="flex-1 mobile:w-full mobile:justify-between mobile:text-center flex items-center gap-2">
          <p className="flex-1 font-anton text-xl">{event.artist}</p>
          <p className="flex-1 font-anton mobile:text-sm">{event.venue}</p>
        </div>
        <div className="flex-1 flex mobile:flex-col items-center gap-2">
          <p className="flex-1 mobile:text-sm">{event.plaza}</p>
          <p className="flex-1 mobile:text-sm">
            {
              <span className="font-anton text-xl">
                {formatShortDate(event.date)}
              </span>
            }{" "}
            {getDayOfWeek(event.date)} ──── {formatTime(event.date)}
          </p>
        </div>
        <div
          className={`md:hidden ${isDisplayed ? "rotate-180" : ""} transition-transform duration-300`}
        >
          <ChebronDown />
        </div>
      </div>
      <div className="mobile:hidden w-full flex mobile:flex-col gap-2 border-t border-t-white/10 h-400px">
        <div className="flex-1 self-stretch">
          <motion.img
            src={event.imgUrl}
            alt={event.artist}
            className="w-full h-full object-cover object-top"
            variants={imgVariants}
          />
        </div>
        <p className="text-sm text-white/50 flex-1 flex items-center mobile:text-center mobile:px-5">
          {event.description}
        </p>
        <div className="flex-1 flex flex-row mobile:flex-row justify-start items-center gap-2 ">
          {event.media && (
            <a
              href={event.media}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/10 rounded-xl hover:bg-white/10 cursor-pointer w-auto flex justify-center"
            >
              <FolderIcon />
            </a>
          )}
          <a
            href={event.salesLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-white/10 rounded-xl hover:bg-white/10 cursor-pointer w-auto flex justify-center"
          >
            <TicketIcon />
          </a>

          {event.adEnable ? (
            <div className="text-green-500 p-2 border border-white/10 rounded-xl cursor-auto w-auto flex justify-center">
              <CheckIcon />
            </div>
          ) : (
            <div className="text-red-500  p-2 border border-white/10 rounded-xl cursor-auto w-auto flex justify-center">
              <XIcon />
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-row mobile:flex-row justify-start items-center gap-2 ">
          <Link
            href={`/admin/events/edit/${event._id}`}
            className="p-2 border border-white/10 rounded-xl hover:bg-white/10 cursor-pointer w-auto flex justify-center"
          >
            <EditIcon />
          </Link>
          <DeleteEventButton eventId={event._id} />
        </div>
        <div className="flex-1 md:hidden"></div>
      </div>

      {isDisplayed && (
        <motion.div
          className="md:hidden w-full flex mobile:flex-col gap-2 border-t border-t-white/10 overflow-hidden"
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: "1000px", opacity: 1 }}
          exit={{ maxHeight: 0, opacity: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={event.imgUrl}
            alt={event.artist}
            className="h-40 w-full object-cover object-top flex-1"
          />
          <p className="text-sm text-white/50 flex-1 flex items-center mobile:text-center mobile:px-5">
            {event.description}
          </p>
          <div className="flex-1 flex flex-col mobile:flex-row justify-center items-start gap-2 ">
            {event.media && (
              <a
                href={event.media}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/10 rounded-xl hover:bg-white/10 cursor-pointer w-auto flex justify-center"
              >
                <FolderIcon />
              </a>
            )}
            <a
              href={event.salesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/10 rounded-xl hover:bg-white/10 cursor-pointer w-auto flex justify-center"
            >
              <TicketIcon />
            </a>
            {event.adEnable ? (
              <div className="text-green-500 p-2 border border-white/10 rounded-xl cursor-auto w-auto flex justify-center">
                <CheckIcon />
              </div>
            ) : (
              <div className="text-red-500  p-2 border border-white/10 rounded-xl cursor-auto w-auto flex justify-center">
                <XIcon />
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col mobile:flex-row justify-center items-start gap-2 ">
            <Link
              href={`/admin/events/edit/${event._id}`}
              className="p-2 border border-white/10 rounded-xl hover:bg-white/10 cursor-pointer w-auto flex justify-center"
            >
              <EditIcon />
            </Link>
            <DeleteEventButton eventId={event._id} />
          </div>

          <div className="flex-1 md:hidden"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EventItem;
