"use client";

import { useState } from "react";
import TrashIcon from "@/app/icons/TrashIcon";
import ConfirmModal from "@/app/components/ConfirmModal/ConfirmModal";
import DeleteSuccessModal from "@/app/components/DeleteSuccessModal/DeleteSuccessModal";
import ErrorSnackbar from "@/app/admin/artists/components/ErrorSnackbar/ErrorSnackbar";
import Loader from "@/app/components/Loader/Loader";

interface DeleteEventButtonProps {
  eventId: string;
  className?: string;
}

const DeleteEventButton = ({
  eventId,
  className = "",
}: DeleteEventButtonProps) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (response.status === 401) {
        setErrorMessage("No autorizado. Por favor inicia sesión.");
        setShowConfirmModal(false);
        return;
      }

      if (!response.ok) {
        throw new Error(result.message || "Error al eliminar el evento");
      }

      setShowConfirmModal(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error deleting event:", error);
      setErrorMessage(
        "Error al eliminar el evento. Por favor intenta nuevamente.",
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
        className={`p-2 border border-red-500 bg-red-500/10 rounded-xl hover:bg-red-500/20 cursor-pointer w-auto flex justify-center transition ${className}`}
        title="Eliminar evento"
      >
        <TrashIcon />
      </button>

      {showConfirmModal && (
        <ConfirmModal
          title="¿Eliminar evento?"
          message="Esta acción no se puede deshacer. ¿Estás seguro de que deseas eliminar este evento?"
          confirmText="Eliminar"
          cancelText="Cancelar"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          isLoading={isLoading}
        />
      )}

      {showSuccessModal && (
        <DeleteSuccessModal
          title="Evento eliminado"
          message="El evento ha sido eliminado exitosamente de la base de datos."
          redirectUrl="/admin/events"
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

export default DeleteEventButton;
