import httpStatus from 'http-status';
import AppError from '../../error/app-error';
import Product from '../product/product.model';
import { IOrder, TOrderStatus } from './order.interface';
import Order from './order.model';

const createOrderIntoDB = async (payload: IOrder) => {
  const product = await Product.findById(payload.product);

  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }

  payload.product = product._id;

  const result = await Order.create(payload);

  await product.updateOne({ $inc: { availableQuantity: -payload.quantity } });

  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find().populate('product');
  return result;
};

const getOrderByIdFromDB = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};

const updateOrderByIdIntoDB = async (
  id: string,
  payload: { orderStatus: TOrderStatus },
) => {
  const result = await Order.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const orderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getOrderByIdFromDB,
  updateOrderByIdIntoDB,
};

export default orderServices;
