import { IRoute } from '@/types';
import { lazy } from 'react';

const Home = lazy(() => import('@/containers/Home'));
const Login = lazy(() => import('@/containers/Login'));
const ForgetPassword = lazy(() => import('@/containers/ForgetPassword'));
const Reregister = lazy(() => import('@/containers/Reregister'));
const Registercomplication = lazy(() => import('@/containers/Registercomplication'));
const Newmember = lazy(() => import('@/containers/Newmember'));
const Search = lazy(() => import('@/containers/Search'));
const SearchResult = lazy(() => import('@/containers/SearchResult'));
const Salary = lazy(() => import('@/containers/Salary'));
const Corporateinfo = lazy(() => import('@/containers/Corporateinfo'));
const Favorite = lazy(() => import('@/containers/Favorite'));
const Comporison = lazy(() => import('@/containers/Comporison'));
const Copnfirmation = lazy(() => import('@/containers/Copnfirmation'));
const Finish = lazy(() => import('@/containers/Finish'));

/*
 * If route has children, it's a parent menu (not link to any pages)
 * You can change permissions to your IAM's permissions
 */
const routes: IRoute[] = [
  {
    path: '/finish',
    title: 'Finish',
    component: Finish,
  },
  {
    path: '/copnfirmation',
    title: 'Copnfirmation',
    component: Copnfirmation,
  },
  {
    path: '/comporison',
    title: 'Comporison',
    component: Comporison,
  },
  {
    path: '/favorite',
    title: 'Favorite',
    component: Favorite,
  },
  {
    path: '/corporateinfo',
    title: 'Corporateinfo',
    component: Corporateinfo,
  },
  {
    path: '/search-result',
    title: 'SearchResult',
    component: SearchResult,
  },
  {
    path: '/salary',
    title: 'Salary',
    component: Salary,
  },
  {
    path: '/search',
    title: 'Search',
    component: Search,
  },
  {
    path: '/newmember',
    title: 'Newmember',
    component: Newmember,
  },
  {
    path: '/registercomplication',
    title: 'Registercomplication',
    component: Registercomplication,
  },
  {
    path: '/reregister',
    title: 'Reregister',
    component: Reregister,
  },
  {
    path: '/forgetPassword',
    title: 'Forget Password',
    component: ForgetPassword,
  },
  {
    path: '/login',
    title: 'Login',
    component: Login,
  },
  {
    path: '/',
    title: 'home',
    component: Home,
  },
];

export default routes;
