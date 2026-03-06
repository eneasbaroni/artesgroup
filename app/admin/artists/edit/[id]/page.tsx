"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArtistForm from "../../components/ArtistForm/ArtistForm";
import { transformArtistToFormData } from "../../components/ArtistForm/helpers";
import { ArtistaFormData } from "../../components/ArtistForm/formValidation";
import Loader from "@/app/components/Loader/Loader";
import ErrorSnackbar from "../../components/ErrorSnackbar/ErrorSnackbar";

interface EditArtistPageProps {
  params: Promise<{ id: string }>;
}

const EditArtistPage = ({ params }: EditArtistPageProps) => {
  const router = useRouter();
  const [artistId, setArtistId] = useState<string | null>(null);
  const [artistData, setArtistData] = useState<ArtistaFormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const resolvedParams = await params;
        const id = resolvedParams.id;
        setArtistId(id);

        const response = await fetch(`/api/artists/${id}`);

        if (response.status === 401) {
          router.push("/login");
          return;
        }

        if (!response.ok) {
          throw new Error("Error al cargar el artista");
        }

        const result = await response.json();
        const formData = transformArtistToFormData(result.artist);
        setArtistData(formData);
      } catch (error) {
        console.error("Error fetching artist:", error);
        setErrorMessage(
          "Error al cargar los datos del artista. Por favor intenta nuevamente.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtist();
  }, [params, router]);

  if (isLoading) {
    return <Loader />;
  }

  if (errorMessage) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center p-10">
        <ErrorSnackbar
          message={errorMessage}
          onClose={() => {
            setErrorMessage(null);
            router.push("/admin/artists");
          }}
        />
      </div>
    );
  }

  if (!artistData || !artistId) {
    return null;
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-10">
      <ArtistForm initialData={artistData} artistId={artistId} />
    </div>
  );
};

export default EditArtistPage;
