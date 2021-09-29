import Landing from '../pages/Landing/Landing';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import IRoute from '../interfaces/route';
import Product from '../pages/Product';

const routes: IRoute[] = [
  {
		path: '/',
		name: 'Landing',
		component: Landing,
		exact: true
	},
  {
		path: '/home',
		name: 'Home',
		component: Home,
		exact: true
	},
  {
		path: '/home/:category',
		name: 'Categories',
		component: Categories,
		exact: true
	},
  {
		path: '/home/:category/:productId',
		name: 'Product',
		component: Product,
		exact: true
	},
]

export default routes;
