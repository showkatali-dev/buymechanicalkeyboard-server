import { IBrand } from './brand.interface';
import Brand from './brand.model';

const createBrandIntoDB = async (payload: IBrand) => {
  const result = await Brand.create(payload);
  return result;
};

const getAllBrandsFromDB = async () => {
  const result = await Brand.find();
  return result;
};

const getBrandByIdFromDB = async (id: string) => {
  const result = await Brand.findById(id);
  return result;
};

const updateBrandByIdIntoDB = async (id: string, payload: Partial<IBrand>) => {
  const result = await Brand.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteBrandByIdFromDB = async (id: string) => {
  const result = await Brand.findByIdAndDelete(id);
  return result;
};

const brandServices = {
  createBrandIntoDB,
  getAllBrandsFromDB,
  getBrandByIdFromDB,
  updateBrandByIdIntoDB,
  deleteBrandByIdFromDB,
};

export default brandServices;
