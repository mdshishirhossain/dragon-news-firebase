import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("/news.json")
            },
            {
                path: "/category/:id",
                loader: () => fetch("/news.json"),
                Component: CategoryNews
            }
        ]
    },
    {
        path: "auth",
        element: <h2>Authentication Layout</h2>
    },
    {
        path: "news",
        element: <h2>News Layout</h2>
    },
    {
        path: "*",
        element: <h2>Error404</h2>
    },
]);

export default router;