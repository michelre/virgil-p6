import React from 'react';
import Error from './components/404/404'
import About from './pages/About/About'
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/root'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />
  },
  {
    path: "About",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
