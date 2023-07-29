import React from 'react';
import { Counter } from './features/counter/ProductList';
import './App.css';
import ProductList from './features/counter/ProductList.js';
import HHome from './pages/Home.js'
import LoginPage from './pages/LoginPage.js';
import SignUpPage from './pages/SignUpPage.js';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HHome></HHome>
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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
