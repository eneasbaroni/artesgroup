import FormField from "@/app/components/InputField/FormField";
import { AGE_RANGES, AGE_RANGE_LABELS } from "./constants";

import { Terrors, Tregister } from "./types";

type AgeSectionProps = {
  register: Tregister;
  errors: Terrors;
};

const AgeSection = ({ register, errors }: AgeSectionProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-light mobile:text-sm">Distribución por edad</h4>
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-4">
        {AGE_RANGES.map((range) => (
          <FormField
            key={range}
            label={AGE_RANGE_LABELS[range]}
            id={`public.age.${range}`}
            placeholder="Ingrese el valor"
            type="number"
            {...register(`public.age.${range}`, {
              setValueAs: (v) => (v === "" ? undefined : Number(v)),
            })}
            error={errors.public?.age?.[range]}
          />
        ))}
      </div>
      {errors.public?.age && (
        <p className="text-red-400 text-sm">{errors.public.age.message}</p>
      )}
    </div>
  );
};

export default AgeSection;
