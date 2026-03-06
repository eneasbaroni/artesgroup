import FormField from "@/app/components/InputField/FormField";

import { Terrors, Tregister, TsetValue } from "./types";
import ProfileIcon from "@/app/icons/ProfileIcon";
import TextAreaField from "@/app/components/TextAreaField/TextAreaField";
import ImageUpload from "@/app/components/ImageUpload/ImageUpload";

type BasicInfoSectionProps = {
  register: Tregister;
  errors: Terrors;
  setValue: TsetValue;
  currentBanner: string;
  currentImg: string;
};

const BasicInfoSection = ({
  register,
  errors,
  setValue,
  currentBanner,
  currentImg,
}: BasicInfoSectionProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-6">
      <div className="flex flex-row mobile:flex-col gap-2 items-center">
        <div className="w-15 h-15 bg-white/10 rounded-full border border-white/10 flex items-center justify-center">
          <ProfileIcon />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-anton text-xl">Información del Artista</h3>
          <h4 className="font-light mobile:text-sm">
            Información básica del artista
          </h4>
        </div>
      </div>

      <FormField
        label="Nombre"
        id="name"
        placeholder="Nombre del artista"
        {...register("name")}
        error={errors.name}
      />

      <TextAreaField
        label="Bio"
        id="bio"
        placeholder="Bio del artista"
        {...register("bio")}
        error={errors.bio}
      />

      <ImageUpload
        label="Banner del Artista"
        onUploadSuccess={(url) => setValue("bannerUrl", url)}
        error={errors.bannerUrl}
        currentImage={currentBanner}
        width={"calc(65% - 1rem)"}
        className="mobile:w-full!"
      />

      <ImageUpload
        label="Imagen del Artista"
        onUploadSuccess={(url) => setValue("imgUrl", url)}
        error={errors.imgUrl}
        currentImage={currentImg}
        width={"calc(35% - 1rem)"}
        className="mobile:w-full!"
      />
    </div>
  );
};

export default BasicInfoSection;
