import { ArtistaFormData } from "./formValidation";
import { Artist } from "@/app/types/artist";

/**
 * Valores por defecto para el formulario de artista
 */
export const getDefaultFormValues = (): ArtistaFormData => ({
  name: "",
  bio: "",
  bannerUrl: "",
  imgUrl: "",
  socialMedia: {
    spotify: "",
    instagram: "",
    youtube: "",
    tiktok: "",
  },
  videos: [],
  public: {
    age: {
      "13-17": 0,
      "18-24": 0,
      "25-34": 0,
      "35-44": 0,
      "44+": 0,
    },
    sex: {
      male: 0,
      female: 0,
    },
  },
});

/**
 * Transforma los datos del artista del backend al formato del formulario
 * @param artist - Datos del artista desde la API
 * @returns Datos en formato ArtistaFormData
 */
export const transformArtistToFormData = (artist: Artist): ArtistaFormData => {
  return {
    name: artist.name || "",
    bio: artist.bio || "",
    bannerUrl: artist.bannerUrl || "",
    imgUrl: artist.imgUrl || "",
    socialMedia: {
      spotify: artist.socialMedia?.spotify || "",
      instagram: artist.socialMedia?.instagram || "",
      youtube: artist.socialMedia?.youtube || "",
      tiktok: artist.socialMedia?.tiktok || "",
    },
    videos: Array.isArray(artist.videos)
      ? artist.videos.map((url: string) => ({ url }))
      : [],
    public: {
      age: {
        "13-17": artist.public?.age?.["13-17"] || 0,
        "18-24": artist.public?.age?.["18-24"] || 0,
        "25-34": artist.public?.age?.["25-34"] || 0,
        "35-44": artist.public?.age?.["35-44"] || 0,
        "44+": artist.public?.age?.["44+"] || 0,
      },
      sex: {
        male: artist.public?.sex?.male || 0,
        female: artist.public?.sex?.female || 0,
      },
    },
  };
};

/**
 * Prepara los datos del formulario para enviar al backend
 * @param data - Datos del formulario
 * @returns Payload para la API
 */
export const preparePayloadForAPI = (data: ArtistaFormData) => {
  return {
    ...data,
    videos: data.videos.map((v) => v.url),
  };
};
