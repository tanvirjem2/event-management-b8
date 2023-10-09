import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './providers/AuthProvider';
import ErrorPage from './ErrorPage/ErrorPage';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import PrivateRoute from './routes/PrivateRoute';
import AppliedDetails from './pages/AppliedDetails';
import Hello from './pages/Hello';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch('/Data.json') },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/features", element: <PrivateRoute><Hello /></PrivateRoute> },
      {
        path: "/details/:id",
        element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
        loader: () => fetch("/Data.json")
      },
      {
        path: "/details",
        element: <PrivateRoute><AppliedDetails /></PrivateRoute>,
        loader: () => fetch("/Data.json")
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Fourth Step AuthProvider */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
