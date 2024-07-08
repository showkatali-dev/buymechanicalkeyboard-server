import { IOrder, TOrderStatus } from './order.interface';
import Order from './order.model';

const createOrderIntoDB = async (payload: IOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find().populate('productId');
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
