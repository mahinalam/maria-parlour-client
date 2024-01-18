import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Book from "../pages/Dashboard/Book";
import AllServices from "../pages/AllServices/AllServices";
import Services from "../pages/Home/Home/Services/Services";
import useService from "../hooks/useService";
import BookingList from "../pages/Dashboard/BookingList";
import Review from "../pages/Dashboard/Review";
import OrderList from "../pages/Dashboard/OrderList";
import AddService from "../pages/Dashboard/AddService";
import MakeAdmin from "../pages/Dashboard/MakeAdmin";
import ManageService from "../pages/Dashboard/ManageService";
import AdminRoute from "./AdminRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <PrivateRoute><AllServices></AllServices></PrivateRoute>
            },


            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/booking-list',
                element: <BookingList></BookingList>
            }, {
                path: '/dashboard/services/:id',
                element: <Book></Book>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`)
            },
            {
                path: '/dashboard/review',
                element: <Review></Review>
            },

            //admin routes
            {
                path: '/dashboard/order-list',
                element: <AdminRoute><OrderList></OrderList></AdminRoute>
            },
            {
                path: '/dashboard/add-service',
                element: <AdminRoute><AddService></AddService></AdminRoute>
            },
            {
                path: '/dashboard/make-admin',
                element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
            },
            {
                path: '/dashboard/manage-service',
                element: <AdminRoute><ManageService></ManageService></AdminRoute>
            }

        ]
    }
]);

export default router;