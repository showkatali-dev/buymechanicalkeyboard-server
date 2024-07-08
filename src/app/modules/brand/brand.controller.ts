import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catch-async';
import { sendResponse } from '../../utils/send-response';
import brandServices from './brand.service';
import AppError from '../../error/app-error';

const createBrand = catchAsync(async (req, res) => {
  const result = await brandServices.createBrandIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Brand added successfully',
    data: result,
  });
});

const getAllBrands = catchAsync(async (req, res) => {
  const result = await brandServices.getAllBrandsFromDB();
  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Data Found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Brands retrieved successfully',
    data: result,
  });
});

const getBrandById = catchAsync(async (req, res) => {
  const result = await brandServices.getBrandByIdFromDB(req.params.id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Data Found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Brand retrieved successfully',
    data: result,
  });
});

const updateBrandById = catchAsync(async (req, res) => {
  const result = await brandServices.updateBrandByIdIntoDB(
    req.params.id,
    req.body,
  );
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Data Found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Brand updated successfully',
    data: result,
  });
});

const deleteBrandById = catchAsync(async (req, res) => {
  const result = await brandServices.deleteBrandByIdFromDB(req.params.id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Data Found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Brand deleted successfully',
    data: result,
  });
});

const brandController = {
  createBrand,
  updateBrandById,
  getAllBrands,
  getBrandById,
  deleteBrandById,
};

export default brandController;
