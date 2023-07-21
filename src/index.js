import React from 'react';
import Error from './pages/404/404'
import About from './pages/About/About'
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Home from './pages/Home/Home'
import Layout from './pages/Layout'
import Appartments from "./pages/Appartments/Appartments";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="appartements/:id" element={<Appartments/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
        </Route>
    )



    /*[
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    },
        {
            path: "About",
            element: <About/>,
        },
    ]*/);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);