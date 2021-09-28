import Landing from '../pages/Landing/Landing';
import Home from '../pages/home/Home';
import Categories from '../pages/categories/Categories';
import IRoute from '../interfaces/route';
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
]

export default routes;
