import { z } from 'zod';

export const createBrandValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    logo: z.string(),
  }),
});

export const updateBrandValidationSchema = z.object({
  body: z
    .object({
      title: z.string().optional(),
      logo: z.string().optional(),
    })
    .strict(),
});
