import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/global.css"
import 'bootstrap/dist/css/bootstrap.min.css';//step 1
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/users.jsx';
import ProductPage from './pages/product.jsx';
import TodoApp from './components/todo/TodoApp.jsx';

const router = createBrowserRouter([ //step 2
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true,
        element: <TodoApp/>
      },
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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* step 3 */}
    <RouterProvider router= {router}/> 
  </StrictMode>,
)
