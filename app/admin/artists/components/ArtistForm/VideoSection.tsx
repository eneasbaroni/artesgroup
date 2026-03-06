import FormField from "@/app/components/InputField/FormField";
import { Tcontrol, Terrors, Tregister } from "./types";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
import { useFieldArray } from "react-hook-form";
import TrashIcon from "@/app/icons/TrashIcon";

type VideoSectionProps = {
  register: Tregister;
  errors: Terrors;
  control: Tcontrol;
};

const VideoSection = ({ register, errors, control }: VideoSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "videos",
  });

  return (
    <div className="mt-10 flex flex-col gap-4">
      <div className="flex flex-row mobile:flex-col gap-2 items-center">
        <div className="w-15 h-15 bg-white/10 rounded-full border border-white/10 flex items-center justify-center">
          <YoutubeIcon />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-anton text-xl">Videos</h3>
          <h4 className="font-light mobile:text-sm">
            Links a los videos del artista
          </h4>
        </div>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-row gap-x-4 items-end">
          <FormField
            label={`Video ${index + 1}`}
            id={`videos.${index}.url`}
            className="mobile:w-[calc(100%-10px)]"
            placeholder="https://youtube.com/watch?v=..."
            {...register(`videos.${index}.url`)}
            error={errors.videos?.[index]?.url}
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className="w-9 h-9 border border-white/10 bg-red-900 cursor-pointer rounded-full flex items-center justify-center"
          >
            <TrashIcon />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ url: "" })}
        className="w-full p-2 rounded-full border border-white/10"
      >
        + Agregar video
      </button>
    </div>
  );
};

export default VideoSection;
