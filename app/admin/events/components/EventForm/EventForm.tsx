"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EventFormData, eventSchema } from "./formValidation";
import { getDefaultFormValues, preparePayloadForAPI } from "./helpers";
import { EventFormProps } from "./types";
import FormField from "@/app/components/InputField/FormField";
import TextAreaField from "@/app/components/TextAreaField/TextAreaField";
import ImageUpload from "@/app/components/ImageUpload/ImageUpload";
import EventIcon from "@/app/icons/EventIcon";
import Loader from "@/app/components/Loader/Loader";
import SuccessModal from "@/app/admin/artists/components/SuccessModal/SuccessModal";
import ErrorSnackbar from "@/app/admin/artists/components/ErrorSnackbar/ErrorSnackbar";
import Link from "next/link";

const EventForm = ({ initialData, eventId }: EventFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Determinar si es modo edición
  const isEditMode = !!eventId;

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: initialData || getDefaultFormValues(),
  });

  const currentImage = useWatch({ control, name: "imgUrl" });

  const handleCloseSuccessModal = () => {
    setShowSuccess(false);
    if (!isEditMode) {
      reset();
    }
  };

  const onSubmit = async (data: EventFormData) => {
    setIsLoading(true);

    try {
      // Preparar payload para el backend
      const payload = preparePayloadForAPI(data);

      // Determinar endpoint y método según modo
      const url = isEditMode ? `/api/events/${eventId}` : "/api/events";
      const method = isEditMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.status === 401) {
        router.push("/login");
        return;
      }

      if (!response.ok) {
        throw new Error(
          result.message ||
            `Error al ${isEditMode ? "actualizar" : "guardar"} el evento`,
        );
      }

      setShowSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      const message = `Error al ${isEditMode ? "actualizar" : "guardar"} el evento, por favor intenta nuevamente.`;
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-15 max-w-150 flex flex-col border border-white/10 p-10 mobile:p-5 rounded-xl white-glass"
      >
        <div className="flex flex-row flex-wrap gap-x-4 gap-y-6 ">
          <div className="flex flex-row mobile:flex-col gap-2 items-center">
            <div className="w-15 h-15 bg-white/10 rounded-full border border-white/10 flex items-center justify-center">
              <EventIcon />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="font-anton text-xl">Información del Evento</h3>
              <h4 className="font-light mobile:text-sm">
                Información básica del evento
              </h4>
            </div>
          </div>
          <FormField
            label="Artista"
            id="artist"
            placeholder="Nombre del artista"
            {...register("artist")}
            error={errors.artist}
          />

          <FormField
            label="Venue"
            id="venue"
            placeholder="Nombre del venue"
            {...register("venue")}
            error={errors.venue}
          />

          <FormField
            label="Locación"
            id="plaza"
            placeholder="Nombre de la locación"
            {...register("plaza")}
            error={errors.plaza}
          />

          <FormField
            label="Link de compra"
            id="salesLink"
            placeholder="Link de compra"
            {...register("salesLink")}
            error={errors.salesLink}
          />

          <FormField
            label="Fecha del evento"
            id="date"
            type="datetime-local"
            {...register("date")}
            error={errors.date}
          />

          <FormField
            label="Pauta habilitada"
            id="adEnable"
            type="checkbox"
            className="w-4 h-6"
            {...register("adEnable")}
            error={errors.adEnable}
          />

          <FormField
            label="Media"
            id="media"
            placeholder="Link de media"
            {...register("media")}
            error={errors.media}
          />

          <FormField
            label="Fecha de lanzamiento"
            id="releaseDate"
            type="datetime-local"
            {...register("releaseDate")}
            error={errors.releaseDate}
          />

          <TextAreaField
            label="Descripción"
            id="description"
            placeholder="Descripción del evento"
            {...register("description")}
            error={errors.description}
          />

          <ImageUpload
            label="Imagen del Evento"
            onUploadSuccess={(url) => setValue("imgUrl", url)}
            error={errors.imgUrl}
            currentImage={currentImage}
            className="mobile:w-full!"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer p-2 mt-2 rounded-full border border-white/10 hover:bg-white/10 transition"
        >
          {isEditMode ? "Actualizar" : "Guardar"}
        </button>
        <Link
          href="/admin"
          className="w-full p-2 mt-4 rounded-full border border-white/10 hover:bg-white/10 transition cursor-pointer text-center"
        >
          Volver al panel
        </Link>
      </form>

      {isLoading && <Loader />}
      {showSuccess && (
        <SuccessModal
          onClose={handleCloseSuccessModal}
          title={
            isEditMode
              ? "Evento actualizado exitosamente!"
              : "Evento guardado exitosamente!"
          }
          description={
            isEditMode
              ? "El evento ha sido actualizado correctamente en la base de datos."
              : "El evento ha sido guardado correctamente en la base de datos."
          }
          addNewButtonText="Agregar nuevo evento"
        />
      )}
      {errorMessage && (
        <ErrorSnackbar
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </>
  );
};

export default EventForm;
