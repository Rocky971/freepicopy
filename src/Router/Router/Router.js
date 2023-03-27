import { createBrowserRouter } from "react-router-dom";
import General from "../../Pages/General/General/General";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import RefarelProggram from "../../Pages/RefarelProggram/RefarelProggram";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/general',
                element: <General />
            },
            {
                path: '/referral',
                element: <RefarelProggram />
            }
        ]
    }
]);

export default router;