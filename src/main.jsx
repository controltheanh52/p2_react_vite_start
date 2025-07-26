import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';//step 1

const router = createBrowserRouter([ //step 2
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element:<div>login</div>
  },
  {
    path: "/register",
    element:<div>login</div>
  },
  {
    path: "/users",
    element:<div>User</div>
  },
  {
    path: "/products",
    element:<div>product</div>
  }
])
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* step 3 */}
    <RouterProvider router= {router}/> 
  </StrictMode>,
)
