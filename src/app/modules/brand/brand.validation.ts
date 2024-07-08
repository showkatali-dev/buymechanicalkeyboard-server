import { z } from 'zod';

export const createBrandValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    image: z.string(),
  }),
});

export const updateBrandValidationSchema = z.object({
  body: z
    .object({
      title: z.string().optional(),
      image: z.string().optional(),
    })
    .strict(),
});
