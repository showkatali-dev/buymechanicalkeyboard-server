import { Router } from 'express';
import { IRoute } from '../interface/error';
import brandRoute from '../modules/brand/brand.route';
import productRoute from '../modules/product/product.route';
import orderRoute from '../modules/order/order.route';

const router = Router();

const routes: IRoute[] = [
  {
    path: '/brands',
    route: brandRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/orders',
    route: orderRoute,
  },
];

routes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
