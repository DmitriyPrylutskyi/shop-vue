import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard'
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Checkout from "@/views/Checkout";
import ProductsList from "@/views/ProductsList";
import NewProduct from "@/views/NewProduct";
import Product from "@/views/Product";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    beforeEnter: AuthGuard
  },
  {
    path: '/new',
    name: 'new',
    component: NewProduct,
    beforeEnter: AuthGuard
  },
  {
    path: '/list',
    name: 'list',
    component: ProductsList,
    beforeEnter: AuthGuard
  },
  {
    path: '/product/:id',
    name: 'product',
    props: true,
    component: Product
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
