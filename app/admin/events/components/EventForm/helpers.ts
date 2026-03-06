import { EventFormData } from "./formValidation";
import { Event } from "@/app/types/event";

/**
 * Valores por defecto para el formulario de evento
 */
export const getDefaultFormValues = (): EventFormData => ({
  artist: "",
  venue: "",
  date: "",
  plaza: "",
  media: "",
  adEnable: false,
  description: "",
  salesLink: "",
  imgUrl: "",
  releaseDate: "",
});

/**
 * Transforma los datos del evento del backend al formato del formulario
 * @param event - Datos del evento desde la API
 * @returns Datos en formato EventFormData
 */
export const transformEventToFormData = (event: Event): EventFormData => {
  return {
    artist: event.artist || "",
    venue: event.venue || "",
    date: event.date ? new Date(event.date).toISOString().slice(0, 16) : "",
    plaza: event.plaza || "",
    media: event.media || "",
    adEnable: event.adEnable || false,
    description: event.description || "",
    salesLink: event.salesLink || "",
    imgUrl: event.imgUrl || "",
    releaseDate: event.releaseDate
      ? new Date(event.releaseDate).toISOString().slice(0, 16)
      : "",
  };
};

/**
 * Prepara los datos del formulario para enviar al backend
 * @param data - Datos del formulario
 * @returns Payload para la API
 */
export const preparePayloadForAPI = (data: EventFormData) => {
  return {
    ...data,
    date: new Date(data.date).toISOString(),
    releaseDate: data.releaseDate
      ? new Date(data.releaseDate).toISOString()
      : undefined,
  };
};
