import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
            }
        ]
    }
])

export default router;