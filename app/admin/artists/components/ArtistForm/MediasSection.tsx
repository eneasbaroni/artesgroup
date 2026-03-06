import FormField from "@/app/components/InputField/FormField";

import { Terrors, Tregister } from "./types";
import ThumbIcon from "@/app/icons/ThumbIcon";

type MediasSectionProps = {
  register: Tregister;
  errors: Terrors;
};

const MediasSection = ({ register, errors }: MediasSectionProps) => {
  return (
    <div className="mt-10 flex flex-row flex-wrap gap-x-4 gap-y-6 ">
      <div className="flex flex-row mobile:flex-col gap-2 items-center">
        <div className="w-15 h-15 bg-white/10 rounded-full border border-white/10 flex items-center justify-center">
          <ThumbIcon />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-anton text-xl">Redes Sociales</h3>
          <h4 className="font-light mobile:text-sm">
            Links a las redes del artista
          </h4>
        </div>
      </div>

      <FormField
        label="Spotify"
        id="socialMedia.spotify"
        placeholder="https://open.spotify.com/..."
        {...register("socialMedia.spotify")}
        error={errors.socialMedia?.spotify}
      />
      <FormField
        label="Instagram"
        id="socialMedia.instagram"
        placeholder="https://instagram.com/..."
        {...register("socialMedia.instagram")}
        error={errors.socialMedia?.instagram}
      />
      <FormField
        label="YouTube"
        id="socialMedia.youtube"
        placeholder="https://youtube.com/..."
        {...register("socialMedia.youtube")}
        error={errors.socialMedia?.youtube}
      />
      <FormField
        label="TikTok"
        id="socialMedia.tiktok"
        placeholder="https://tiktok.com/@..."
        {...register("socialMedia.tiktok")}
        error={errors.socialMedia?.tiktok}
      />
    </div>
  );
};

export default MediasSection;
