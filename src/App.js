import React, { useEffect } from 'react';
import { Counter } from './features/counter/components/ProductList';
import './App.css';
import ProductList from './features/counter/components/ProductList.js';
import HHome from './pages/Home.js'
import LoginPage from './pages/LoginPage.js';
import SignUpPage from './pages/SignUpPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Carta.js'
import CartPage from './pages/CartPage.js';
import Checkout from './pages/Checkout.js';
import ProductDetails from './features/counter/components/ProductDetails.js';
import Protected from './features/auth/components/Protected.js';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice.js';
import PageNotFound from './pages/404.js';
import OrderSuccessPage from './pages/OrderSuccessPage.js';
import UserOrdersPage from './pages/UserOrdersPage.js';
import UserProfile from './features/user/components/UserProfile.js';
import UserProfilePage from './pages/UserProfilePage.js';
import { fetchLoggedInUserAsync } from './features/user/userSlice.js';
import LogOut from './features/auth/components/LogOut.js';
import ForgotPasswordPage from './pages/ForgotPasswordPage.js';
import ForgotPassword from './features/auth/components/ForgotPassword.js';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin.js'
import AdminHome from './pages/AdminProductListPage.js';
import AdminProductDetailPage from './pages/AdminProductDetailPage.js';
import ProductForm from './features/counter copy/components/ProductForm.js';
import AdminProductFormPage from './pages/AdminProductFormPage.js';
import AdminOrdersPage from './pages/AdminOrdersPage.js';
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider } from "react-alert";





const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT
};


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <HHome></HHome>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <Protected>
      <CartPage></CartPage>
    </Protected>
  },
  {
    path: "/checkout",
    element: <Protected>
      <Checkout></Checkout>,
    </Protected>
  },
  {
    path: "/product-detail/:id",
    element:<Protected>
      <ProductDetailPage></ProductDetailPage>,
    </Protected>
  },
  {
    path: "/admin/product-detail/:id",
    element:<ProtectedAdmin>
      <AdminProductDetailPage></AdminProductDetailPage>
    </ProtectedAdmin>
  },
  {
    path: "/admin/product-form",
    element:<ProtectedAdmin>
      <AdminProductFormPage></AdminProductFormPage>
    </ProtectedAdmin>
  },
  {
    path: "/admin/orders",
    element:<ProtectedAdmin>
      <AdminOrdersPage></AdminOrdersPage>
    </ProtectedAdmin>
  },
  {
    path: "/admin/product-form/edit/:id",
    element:<ProtectedAdmin>
      <AdminProductFormPage></AdminProductFormPage>
    </ProtectedAdmin>
  },
  {
    path: "/admin",
    element: <ProtectedAdmin>
      <AdminHome></AdminHome>
    </ProtectedAdmin>
  },
  {
    path:'*',
    element:
    <PageNotFound></PageNotFound>
  },
  {
    path: "/order-success/:id",
    element:
    <OrderSuccessPage></OrderSuccessPage>
  },
  {
    path: "/orders",
    element:
    <UserOrdersPage></UserOrdersPage>
  },
  {
    path: "/profile",
    element:
    <UserProfilePage></UserProfilePage>
  },
  {
    path: '/forgot-password',
    element: 
    <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: "/logout",
    element:
    <LogOut></LogOut>
  },
]);

function App() {



  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);



  useEffect(()=>{
    if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
    dispatch(fetchLoggedInUserAsync(user.id));
    }
  },[dispatch, user])
  return (
    <div className="App">
    <Provider template={AlertTemplate} {...options}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
