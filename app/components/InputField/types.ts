import { ComponentProps } from "react";
import { FieldError } from "react-hook-form";

export interface FormFieldProps extends ComponentProps<"input"> {
  label: string;
  error?: FieldError;
  className?: string;
}
