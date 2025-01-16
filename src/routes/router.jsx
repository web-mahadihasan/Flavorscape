import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/DashboardHome/DashboardHome";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import DashboardCart from "../pages/Dashboard/DashboardCart/DashboardCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/our-menu",
                element: <OurMenu/>
            },
            
            {
                path: "/order/:category",
                element: <OurShop/>
            },
            {
                path: "/auth/login",
                element: <Login/>
            },
            {
                path: "/auth/register",
                element: <Register/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome/>
            },
            {
                path: "/dashboard/my-cart",
                element: <DashboardCart/>
            }
        ]
    }
])

export default router;