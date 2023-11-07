import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ChefPage from "../pages/ChefPage/ChefPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: 'chef-page',
        element: <ChefPage></ChefPage>
    }
]);

export default router;