import { Router } from 'express';
import orderController from './order.controller';
import { validateRequest } from '../../middlewares/validate-request';
import {
  createOrderValidationSchema,
  updateOrderValidationSchema,
} from './order.validation';

const router = Router();

router.get('/', orderController.getAllOrders);
router.post(
  '/',
  validateRequest(createOrderValidationSchema),
  orderController.createOrder,
);
router.get('/:id', orderController.getOrderById);
router.put(
  '/:id',
  validateRequest(updateOrderValidationSchema),
  orderController.updateOrderById,
);

const orderRoute = router;

export default orderRoute;
