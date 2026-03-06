import { z } from "zod";

export const eventSchema = z.object({
  artist: z.string().min(1, "El artista es requerido"),
  venue: z.string().min(1, "El venue es requerido"),
  date: z
    .string()
    .min(1, "La fecha es requerida")
    .refine((val) => !isNaN(Date.parse(val)), { message: "Fecha inválida" }),
  plaza: z.string().min(1, "La ubicación es requerida"),
  media: z.string().optional(),
  adEnable: z.boolean(),
  description: z.string().min(1, "La descripción es requerida"),
  salesLink: z.string().url("URL inválida").optional().or(z.literal("")),
  imgUrl: z.string().min(1, "La imagen es requerida").url("URL inválida"),
  releaseDate: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: "Fecha de lanzamiento inválida",
    }),
});

export type EventFormData = z.infer<typeof eventSchema>;
