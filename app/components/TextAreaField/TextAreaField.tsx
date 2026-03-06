import { TextAreaFieldProps } from "./types";

const TextAreaField = ({
  label,
  error,
  id,
  ...inputProps
}: TextAreaFieldProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <textarea
        id={id}
        {...inputProps}
        className="py-2 px-4 rounded-lg bg-white placeholder-gray-400! text-sm text-black"
      />
      {error && <p className="text-xs text-red-400">{error.message}</p>}
    </div>
  );
};

export default TextAreaField;
