import { z } from 'zod';

export const createOrderValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    productId: z.string(),
    phone_number: z.string(),
    delivery_address: z.string(),
    payment_type: z.string(),
    transaction_id: z.string().optional(), // for online payment
    price: z.number(),
    quantity: z.number(),
    orderStatus: z
      .enum(['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'])
      .optional(),
  }),
});

export const updateOrderValidationSchema = z.object({
  body: z
    .object({
      orderStatus: z.enum([
        'Pending',
        'Processing',
        'Shipped',
        'Delivered',
        'Cancelled',
      ]),
    })
    .strict(),
});
