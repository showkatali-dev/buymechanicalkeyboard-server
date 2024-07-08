import mongoose from 'mongoose';

export interface IProduct {
  name: string;
  image: string;
  brand: mongoose.Types.ObjectId;
  description: string;
  price: number;
  currency: string;
  availableQuantity: number;
  rating: number;
  isDeleted?: boolean;
}