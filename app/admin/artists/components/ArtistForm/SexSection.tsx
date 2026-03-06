import FormField from "@/app/components/InputField/FormField";
import { Terrors, Tregister } from "./types";

type SexSectionProps = {
  register: Tregister;
  errors: Terrors;
};

const SexSection = ({ register, errors }: SexSectionProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-light mobile:text-sm">Distribución por sexo (%)</h4>
      <div className="flex flex-row flex-wrap gap-x-4 mobile:gap-y-4">
        <FormField
          label="Masculino"
          id="public.sex.male"
          placeholder="Ingrese el porcentaje sin %"
          type="number"
          {...register("public.sex.male", { valueAsNumber: true })}
          error={errors.public?.sex?.male}
        />
        <FormField
          label="Femenino"
          id="public.sex.female"
          placeholder="Ingrese el porcentaje sin %"
          type="number"
          {...register("public.sex.female", { valueAsNumber: true })}
          error={errors.public?.sex?.female}
        />
      </div>
      {errors.public?.sex && (
        <p className="text-red-400 text-sm">{errors.public.sex.message}</p>
      )}
    </div>
  );
};

export default SexSection;
