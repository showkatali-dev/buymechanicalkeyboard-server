import { z } from 'zod';

export const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
    brand: z.string(),
    description: z.string(),
    price: z.number(),
    currency: z.string(),
    availableQuantity: z.number(),
    rating: z.number(),
    isDeleted: z.boolean().optional(),
  }),
});

export const updateProductValidationSchema = z.object({
  body: z
    .object({
      name: z.string().optional(),
      image: z.string().optional(),
      brand: z.string().optional(),
      description: z.string().optional(),
      price: z.number().optional(),
      currency: z.string().optional(),
      availableQuantity: z.number().optional(),
      rating: z.number().optional(),
      isDeleted: z.boolean().optional(),
    })
    .strict(),
});
