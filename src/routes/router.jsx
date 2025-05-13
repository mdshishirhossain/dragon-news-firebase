import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute.jsx/PrivateRoute";
import Loading from "../pages/Loading/Loading";



const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/category/:id",
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <Loading></Loading>,
                Component: CategoryNews,
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path: "/auth/register",
                Component: Register

            }
        ]
    },
    {
        path: "/news-details/:id",
        loader: ()=> fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
    },
    {
        path: "*",
        element: <h2>Error404</h2>
    },
]);

export default router;