import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';//step 1
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/users.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "./styles/global.css"
const router = createBrowserRouter([ //step 2
  {
    path: "/",
    element: <App/>,
    children: [
      {
    path: "/users",
    element:<UserPage/>
      },
      {
    path: "/products",
    element:<ProductPage/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element:<RegisterPage/>
  },
  {
    path: "/users",
    element:<UserPage/>
  },
  {
    path: "/products",
    element:<ProductPage/>
  }
])

import ProductPage from './pages/product.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* step 3 */}
    <RouterProvider router= {router}/> 
  </StrictMode>,
)
