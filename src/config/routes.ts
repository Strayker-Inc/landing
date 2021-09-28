import Landing from '../pages/Landing/Landing';
import Home from '../pages/home/Home';
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
]

export default routes;
