import { TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface TextAreaFieldProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id"
> {
  label: string;
  error?: FieldError;
  id: string;
}
