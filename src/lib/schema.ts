import { z } from "zod";

export const contactSchema = z.object({
  email: z.email({ message: "Email invalide" }),
  message: z
    .string()
    .min(10, { message: "Le message doit faire au moins 10 caractères" }),
});

export type ContactSchema = typeof contactSchema;
