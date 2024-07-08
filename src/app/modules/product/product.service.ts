import QueryBuilder from '../../builder/query-builder';
import { productSearhableFields } from './product.constant';
import { IProduct } from './product.interface';
import Product from './product.model';

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(
    Product.find().populate('brand'),
    query,
  ).search(productSearhableFields);

  const result = await productQuery.modelQuery;
  return result;
};

const getProductByIdFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductByIdIntoDB = async (
  id: string,
  payload: Partial<IProduct>,
) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const softDeleteProductByIdFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdIntoDB,
  softDeleteProductByIdFromDB,
};

export default productServices;
