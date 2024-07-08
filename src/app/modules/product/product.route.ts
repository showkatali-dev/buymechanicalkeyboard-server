import { Router } from 'express';
import productController from './product.controller';
import { validateRequest } from '../../middlewares/validate-request';
import {
  createProductValidationSchema,
  updateProductValidationSchema,
} from './product.validation';

const router = Router();

router.get('/', productController.getAllProducts);
router.post(
  '/',
  validateRequest(createProductValidationSchema),
  productController.createProduct,
);
router.get('/:id', productController.getProductById);
router.put(
  '/:id',
  validateRequest(updateProductValidationSchema),
  productController.updateProductById,
);
router.delete('/:id', productController.deleteProductById);

const productRoute = router;

export default productRoute;
