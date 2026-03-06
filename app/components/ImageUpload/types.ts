import { FieldError } from "react-hook-form";

export type ImageUploadProps = {
  label: string;
  onUploadSuccess: (url: string) => void;
  error?: FieldError;
  currentImage?: string;
  width?: string | number;
  className?: string;
};
