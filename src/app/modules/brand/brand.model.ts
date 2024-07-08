import { Schema, model } from 'mongoose';
import { IBrand } from './brand.interface';

const brandSchema = new Schema<IBrand>(
  {
    title: { type: String, required: true },
    logo: { type: String, required: true },
  },
  { versionKey: false },
);

const Brand = model<IBrand>('Brand', brandSchema);
export default Brand;
