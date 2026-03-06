"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { artistaSchema, ArtistaFormData } from "./formValidation";
import { getDefaultFormValues, preparePayloadForAPI } from "./helpers";
import { ArtistFormProps } from "./types";
import CrowdIcon from "@/app/icons/CrowdIcon";
import Divider from "@/app/components/Divider/Divider";
import Loader from "@/app/components/Loader/Loader";
import SuccessModal from "../SuccessModal/SuccessModal";
import ErrorSnackbar from "../ErrorSnackbar/ErrorSnackbar";
import AgeSection from "./AgeSection";
import SexSection from "./SexSection";
import VideoSection from "./VideoSection";
import MediasSection from "./MediasSection";
import BasicInfoSection from "./BasicInfoSection";
import Link from "next/link";

const ArtistForm = ({ initialData, artistId }: ArtistFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Determinar si es modo edición
  const isEditMode = !!artistId;

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ArtistaFormData>({
    resolver: zodResolver(artistaSchema),
    defaultValues: initialData || getDefaultFormValues(),
  });

  const currentBanner = watch("bannerUrl");
  const currentImg = watch("imgUrl");

  const handleCloseSuccessModal = () => {
    setShowSuccess(false);
    if (!isEditMode) {
      reset();
    }
  };

  const onSubmit = async (data: ArtistaFormData) => {
    setIsLoading(true);

    try {
      // Preparar payload para el backend
      const payload = preparePayloadForAPI(data);

      // Determinar endpoint y método según modo
      const url = isEditMode ? `/api/artists/${artistId}` : "/api/artists";
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
        // No autorizado - redirigir al login
        router.push("/login");
        return;
      }

      if (!response.ok) {
        throw new Error(
          result.message ||
            `Error al ${isEditMode ? "actualizar" : "guardar"} el artista`,
        );
      }

      setShowSuccess(true);
      console.log(
        `Artista ${isEditMode ? "actualizado" : "creado"}:`,
        result.artist,
      );
    } catch (error) {
      console.error("Error:", error);
      const message = `Error al ${isEditMode ? "actualizar" : "guardar"} el artista, por favor intenta nuevamente.`;
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
        {/* ── Información básica ── */}
        <BasicInfoSection
          register={register}
          errors={errors}
          setValue={setValue}
          currentBanner={currentBanner}
          currentImg={currentImg}
        />
        <Divider />

        {/* ── Redes sociales ── */}
        <MediasSection register={register} errors={errors} />
        <Divider />

        {/* ── Videos ── */}
        <VideoSection register={register} errors={errors} control={control} />
        <Divider />

        {/* ── Público ── */}
        <div className="mt-10 flex flex-col gap-6">
          <div className="flex flex-row mobile:flex-col gap-2 items-center">
            <div className="w-15 h-15 bg-white/10 rounded-full border border-white/10 flex items-center justify-center">
              <CrowdIcon />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="font-anton text-xl">Público</h3>
              <h4 className="font-light mobile:text-sm">
                Distribución del público del artista
              </h4>
            </div>
          </div>

          {/* Edad */}
          <AgeSection register={register} errors={errors} />

          {/* Sexo */}
          <SexSection register={register} errors={errors} />
        </div>

        <button
          type="submit"
          className="w-full p-2 mt-10 rounded-full border border-white/10 hover:bg-ag-magent transition cursor-pointer"
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
      {showSuccess && <SuccessModal onClose={handleCloseSuccessModal} />}
      {errorMessage && (
        <ErrorSnackbar
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </>
  );
};

export default ArtistForm;
