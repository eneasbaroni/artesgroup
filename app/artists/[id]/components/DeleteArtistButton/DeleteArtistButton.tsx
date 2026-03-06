"use client";

import { useState } from "react";
import TrashIcon from "@/app/icons/TrashIcon";
import ConfirmModal from "@/app/components/ConfirmModal/ConfirmModal";
import DeleteSuccessModal from "@/app/components/DeleteSuccessModal/DeleteSuccessModal";
import ErrorSnackbar from "@/app/admin/artists/components/ErrorSnackbar/ErrorSnackbar";
import Loader from "@/app/components/Loader/Loader";

interface DeleteArtistButtonProps {
  artistId: string;
  className?: string;
}

const DeleteArtistButton = ({
  artistId,
  className = "",
}: DeleteArtistButtonProps) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/artists/${artistId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (response.status === 401) {
        setErrorMessage("No autorizado. Por favor inicia sesión.");
        setShowConfirmModal(false);
        return;
      }

      if (!response.ok) {
        throw new Error(result.message || "Error al eliminar el artista");
      }

      setShowConfirmModal(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error deleting artist:", error);
      setErrorMessage(
        "Error al eliminar el artista. Por favor intenta nuevamente.",
      );
      setShowConfirmModal(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <button
        onClick={handleDeleteClick}
        className={`px-4 py-2 cursor-pointer mobile:text-sm border border-red-500 bg-red-500/10 rounded-full hover:bg-red-500/20 transition flex items-center justify-center ${className}`}
        title="Eliminar artista"
      >
        <TrashIcon />
      </button>

      {showConfirmModal && (
        <ConfirmModal
          title="¿Eliminar artista?"
          message="Esta acción no se puede deshacer. ¿Estás seguro de que deseas eliminar este artista?"
          confirmText="Eliminar"
          cancelText="Cancelar"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          isLoading={isLoading}
        />
      )}

      {showSuccessModal && (
        <DeleteSuccessModal
          title="Artista eliminado"
          message="El artista ha sido eliminado exitosamente de la base de datos."
          redirectUrl="/admin/artists"
          redirectText="Volver al listado"
        />
      )}

      {errorMessage && (
        <ErrorSnackbar
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default DeleteArtistButton;
