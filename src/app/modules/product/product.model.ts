import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';
import Brand from '../brand/brand.model';

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: 'Brand',
    },
    brandName: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    availableQuantity: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false },
);

productSchema.pre('save', async function (next) {
  const brand = await Brand.findById(this.brand);
  this.brandName = brand?.title;
  next();
});

productSchema.pre('find', function (next) {
  this.where({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('findOne', function (next) {
  this.where({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

const Product = model<IProduct>('Product', productSchema);
export default Product;
