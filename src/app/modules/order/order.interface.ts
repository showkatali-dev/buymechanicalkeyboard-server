import mongoose from 'mongoose';

export type TOrderStatus =
  | 'Pending'
  | 'Processing'
  | 'Shipped'
  | 'Delivered'
  | 'Cancelled';

export interface IOrder {
  name: string;
  email: string;
  productId: mongoose.Types.ObjectId;
  phone_number: string;
  delivery_address: string;
  payment_type: string;
  transaction_id?: string; // for online payment
  price: number;
  quantity: number;
  orderStatus?: TOrderStatus;
}
