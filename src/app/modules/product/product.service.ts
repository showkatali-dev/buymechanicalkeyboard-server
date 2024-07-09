import httpStatus from 'http-status';
import QueryBuilder from '../../builder/query-builder';
import AppError from '../../error/app-error';
import Brand from '../brand/brand.model';
import { productSearhableFields } from './product.constant';
import { IProduct } from './product.interface';
import Product from './product.model';

const createProductIntoDB = async (payload: IProduct) => {
  const brand = await Brand.findById(payload.brand);

  if (!brand) {
    throw new AppError(httpStatus.NOT_FOUND, 'Brand not found');
  }

  payload.brand = brand._id;

  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  let productQuery = new QueryBuilder(Product.find().populate('brand'), query)
    .search(productSearhableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  // price filter
  if (query.minPrice) {
    productQuery = productQuery.customFilter({
      price: { $gt: Number(query.minPrice) },
    });
  }

  if (query.maxPrice) {
    productQuery = productQuery.customFilter({
      price: { $lt: Number(query.maxPrice) },
    });
  }

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
