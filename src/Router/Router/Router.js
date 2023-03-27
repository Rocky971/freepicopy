import { createBrowserRouter } from "react-router-dom";
import ContributorRanking from "../../Pages/ContributorRanking/ContributorRanking/ContributorRanking";
import General from "../../Pages/General/General/General";
import GenHome from "../../Pages/General/GenHome/GenHome";
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
                path: '/contributor',
                element: <ContributorRanking />
            },
            {
                path: '/referral',
                element: <RefarelProggram />
            },
            {
                path: '/general',
                element: <GenHome />
            },
        ]
    }
]);

export default router;