import { z } from "zod";

const optionalUrl = z.string().url("URL inválida").optional().or(z.literal(""));

export const artistaSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  bio: z.string().min(1, "La bio es requerida"),
  bannerUrl: z.string().min(1, "El banner es requerido").url("URL inválida"),
  imgUrl: z.string().min(1, "La imagen es requerida").url("URL inválida"),
  socialMedia: z.object({
    spotify: optionalUrl,
    instagram: optionalUrl,
    youtube: optionalUrl,
    tiktok: optionalUrl,
  }),
  videos: z.array(z.object({ url: z.string().url("URL de video inválida") })),
  public: z.object({
    age: z.object({
      "13-17": z.number().min(0),
      "18-24": z.number().min(0),
      "25-34": z.number().min(0),
      "35-44": z.number().min(0),
      "44+": z.number().min(0),
    }),
    sex: z
      .object({
        male: z.number().min(0).max(100),
        female: z.number().min(0).max(100),
      })
      .refine((data) => data.male + data.female === 100, {
        message: "La suma de los sexos debe ser 100%",
      }),
  }),
});

export type ArtistaFormData = z.infer<typeof artistaSchema>;
