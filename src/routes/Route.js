import { Fragment, lazy } from 'react';
const ProductList = lazy(() => import('../pages/Home/ProductList/ProductList'));
const ProductDetail = lazy(() => import('../pages/Products/ProductDetail/ProductDetail'));
const OrderDetailView = lazy(() => import('../pages/Staff/OrderDetailView'));
const AdminLayout = lazy(() => import('../components/layouts/AdminLayout'));
const DefaultLayout = lazy(() => import('../components/layouts/DefaultLayout'));
const Home = lazy(() => import('../pages/Home/Home'));
const LoginPage = lazy(() => import('../pages/Account/Login'));
const Register = lazy(() => import('../pages/Account/Register'));
const StaffView = lazy(() => import('../pages/Staff/StaffView'));
const ProductsView = lazy(() => import('../pages/Staff/ProductManagement/ProductsView'));
const OrdersView = lazy(() => import('../pages/Staff/OrdersView'));
const NotificationsView = lazy(() => import('../pages/Staff/NotificationView'));
const ProductCreatePage = lazy(() => import('../pages/Staff/ProductManagement/ProductCreate'));
const ProductEditPage = lazy(() => import('../pages/Staff/ProductManagement/ProductEdit'));
const publicRoutes = [
	{
		index: true,
		component: Home,
		layout: DefaultLayout,
	},
	{
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/product',
		children: [
			{ index: true, component: ProductList },
			{ path: ':slug', component: ProductDetail },
		],
		layout: DefaultLayout,
	},
	{
		path: '/staff',
		component: StaffView,
		children: [
			{ index: true, component: ProductsView },
			{ path: 'products', component: ProductsView },
			{ path: 'orders', component: OrdersView },
			{ path: 'orders/:id', component: OrderDetailView },
			{ path: 'notifications', component: NotificationsView },
			{ path: 'product/create', component: ProductCreatePage },
			{ path: 'product/edit/:id', component: ProductEditPage },
		],
	},

	{
		path: '/account',
		layout: DefaultLayout,
		children: [
			{ index: true, component: LoginPage },
			{ path: 'register', component: Register },
		],
	},
];

const privateRoutes = [
	{
		path: '/editor',
		component: Fragment,
		layout: AdminLayout,
	},
	{
		path: '/projects',
		component: Fragment,
	},
];
export { publicRoutes, privateRoutes };
