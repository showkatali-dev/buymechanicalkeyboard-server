import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    phone_number: { type: String, required: true },
    delivery_address: { type: String, required: true },
    payment_type: { type: String, required: true },
    transaction_id: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    orderStatus: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
  },
  { timestamps: true, versionKey: false },
);

const Order = model<IOrder>('Order', orderSchema);
export default Order;
