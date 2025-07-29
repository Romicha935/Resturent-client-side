import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/secrate/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboad/Cart/Cart";
import AllUsers from "../pages/Dashboad/AllUsers/AllUsers";
import AddItems from "../pages/Dashboad/AddItems/AddItems";
// import { react } from '@vitejs/plugin-react';
import AdminRoute from './AdminRoute';
import ManagItems from "../pages/ManagItems/ManagItems";
import UpdateItem from "../pages/Updateitem/UpdateItem";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/menu',
                element:<Menu/>
            },
            {
                path:'/order/:category',
                element: <Order/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/signup',
                element: <SignUp/>
            },
            {
                path: 'secret',
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
     path:'dashboard',
     element:<PrivateRoute><Dashboard/></PrivateRoute>,
     children:[
        {
            path:'cart',
            element:<Cart/>
        },
        //admin routes
        {
            path:'addItems',
            element:<AdminRoute><AddItems/></AdminRoute>
        },
        {
            path:'manageItems',
            // element:<AdminRoute><ManagItems/></AdminRoute>
            element:<ManagItems/>
        },
        {
            path:'updateItem/:id',
            // element:<AdminRoute><ManagItems/></AdminRoute>
            element:<UpdateItem/>,
            loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`) 
        },
        {
           path:'users',
           element:<AllUsers/>
        }
     ]
    }
])