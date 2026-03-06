import { FormFieldProps } from "./types";

const FormField = ({
  label,
  error,
  id,
  className,
  ...inputProps
}: FormFieldProps) => {
  return (
    <div className="w-[calc(50%-1rem)] mobile:w-full flex flex-col gap-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        {...inputProps}
        className={`${className} py-2 px-4 rounded-full bg-white placeholder-gray-400! text-sm text-black`}
      />
      {error && <p className="text-xs text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormField;
