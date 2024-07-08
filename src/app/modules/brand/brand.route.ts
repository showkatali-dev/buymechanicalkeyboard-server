import { Router } from 'express';
import brandController from './brand.controller';
import { validateRequest } from '../../middlewares/validate-request';
import {
  createBrandValidationSchema,
  updateBrandValidationSchema,
} from './brand.validation';

const router = Router();

router.get('/', brandController.getAllBrands);
router.post(
  '/',
  validateRequest(createBrandValidationSchema),
  brandController.createBrand,
);
router.get('/:id', brandController.getBrandById);
router.put(
  '/:id',
  validateRequest(updateBrandValidationSchema),
  brandController.updateBrandById,
);
router.delete('/:id', brandController.deleteBrandById);

const brandRoute = router;

export default brandRoute;
