"use client";

import { useState, useEffect } from "react";
import { ImageUploadProps } from "./types";
import ImageIcon from "@/app/icons/ImageIcon";

const ImageUpload = ({
  label,
  onUploadSuccess,
  error,
  currentImage,
  width = "180px",
  className,
}: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage || null);

  // Sincronizar preview cuando currentImage cambia (ej: reset del formulario)
  useEffect(() => {
    setPreview(currentImage || null);
  }, [currentImage]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    // Preview local
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error del servidor:", data);
        throw new Error(data.error || "Error al subir imagen");
      }

      console.log("Upload exitoso:", data.url);
      onUploadSuccess(data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(
        `Error al subir imagen: ${error instanceof Error ? error.message : "Error desconocido"}`,
      );
      setPreview(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className={`flex flex-col gap-2 ${className}`}
      style={{ width: width }}
    >
      <label className="text-sm font-medium">{label}</label>

      <div className="flex flex-col gap-4">
        <input
          id={`file-upload-${label}`}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="hidden"
        />

        <label
          htmlFor={`file-upload-${label}`}
          className={`h-45 w-full border-2 border-white/20 border-dashed rounded-lg flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/40 transition-colors`}
        >
          {preview && !uploading ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <>
              <ImageIcon />
              <span className="text-sm text-white/70 text-center px-4">
                Agregar imagen del artista
              </span>
            </>
          )}
        </label>

        {uploading && (
          <p className="text-sm text-ag-magent">Subiendo imagen...</p>
        )}

        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
